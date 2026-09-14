import { cleanup, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { NotificationsProvider } from '../../modules/notifications/NotificationsProvider'
import DashboardPage from '../../pages/dashboard/DashboardPage'
import AppShell from './AppShell'

afterEach(cleanup)

describe('AppShell notifications', () => {
  it('opens the Notification Center from the recent-notifications action', async () => {
    const user = userEvent.setup()
    const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } })

    render(
      <QueryClientProvider client={queryClient}>
        <NotificationsProvider>
          <AppShell>
            <DashboardPage />
          </AppShell>
        </NotificationsProvider>
      </QueryClientProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'View all' }))

    expect(screen.getByRole('dialog', { name: 'Notification center' })).toBeTruthy()
  })
})
