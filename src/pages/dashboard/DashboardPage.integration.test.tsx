import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { NotificationsProvider } from '../../modules/notifications/NotificationsProvider'
import { tickets } from '../../services/mockData'
import DashboardPage from './DashboardPage'

vi.mock('../../services/customerService', () => ({
  getCustomer: () => Promise.reject(new Error('Customer request failed')),
}))

afterEach(cleanup)

describe('DashboardPage service isolation', () => {
  it('renders a successful section when another dashboard request fails', async () => {
    const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } })
    queryClient.setQueryData(['service-tickets'], tickets)

    render(
      <QueryClientProvider client={queryClient}>
        <NotificationsProvider>
          <DashboardPage />
        </NotificationsProvider>
      </QueryClientProvider>,
    )

    expect(await screen.findByText('Unable to load customer information.')).toBeTruthy()
    expect((await screen.findAllByText('Email access issue')).length).toBeGreaterThan(0)
  })
})
