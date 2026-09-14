import { cleanup, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { NotificationsProvider } from '../../NotificationsProvider'
import NotificationCenter from './NotificationCenter'

afterEach(cleanup)

describe('NotificationCenter', () => {
  it('labels the unread view and displays an empty state after all items are read', async () => {
    const user = userEvent.setup()
    const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } })

    render(
      <QueryClientProvider client={queryClient}>
        <NotificationsProvider>
          <NotificationCenter isOpen onOpenChange={() => undefined} />
        </NotificationsProvider>
      </QueryClientProvider>,
    )

    await user.click(screen.getByRole('radio', { name: 'Unread' }))

    expect(screen.getByRole('heading', { name: 'Unread notifications' })).toBeTruthy()

    await screen.findAllByRole('button', { name: /^Mark .* as read$/ })

    while (screen.queryAllByRole('button', { name: /^Mark .* as read$/ }).length > 0) {
      await user.click(screen.getAllByRole('button', { name: /^Mark .* as read$/ })[0])
    }

    expect(screen.getByText('No unread notifications.')).toBeTruthy()
  })
})
