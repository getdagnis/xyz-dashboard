import { cleanup, render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import { NotificationsProvider } from '../../modules/notifications/NotificationsProvider';
import DashboardPage from './DashboardPage';

function renderDashboard() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

  return render(
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <DashboardPage />
      </NotificationsProvider>
    </QueryClientProvider>,
  );
}

afterEach(cleanup);

describe('DashboardPage search', () => {
  it('shows the dashboard when search is empty', () => {
    renderDashboard();

    expect(screen.getByRole('heading', { name: 'Customer overview' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Recent orders' })).toBeTruthy();
  });

  it('shows all source groups for a VPN search', async () => {
    const user = userEvent.setup();
    renderDashboard();

    const searchField = screen.getByLabelText('Global search');
    await user.type(searchField, 'VPN');

    expect(document.activeElement).toBe(searchField);
    expect(screen.getByRole('heading', { name: 'Products' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Knowledge articles' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Support tickets' })).toBeTruthy();
    expect(await screen.findByText('VPN gateway appliance', {}, { timeout: 1000 })).toBeTruthy();
    expect(screen.getByText('INC-23910 — VPN access for a new employee')).toBeTruthy();
  });

  it('restores the dashboard when search is cleared', async () => {
    const user = userEvent.setup();
    renderDashboard();

    await user.type(screen.getByLabelText('Global search'), 'VPN');
    await user.click(screen.getByRole('button', { name: 'Clear search' }));

    expect(screen.getByRole('heading', { name: 'Customer overview' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: 'Products' })).toBeNull();
  });

  it('shows an empty state for a non-matching query', async () => {
    const user = userEvent.setup();
    renderDashboard();

    await user.type(screen.getByLabelText('Global search'), 'printer');

    const emptyStates = await screen.findAllByText(
      'No results from this source. Try searching for “VPN”',
      {},
      { timeout: 3000 },
    );

    expect(emptyStates).toHaveLength(3);
  });

  it('keeps the dashboard visible for a whitespace-only query', async () => {
    const user = userEvent.setup();
    renderDashboard();

    await user.type(screen.getByLabelText('Global search'), '   ');

    expect(screen.getByRole('heading', { name: 'Customer overview' })).toBeTruthy();
    expect(screen.queryByText('No results found')).toBeNull();
  });
});
