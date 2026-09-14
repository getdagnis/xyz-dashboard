import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { NotificationsProvider } from '../../NotificationsProvider'
import NotificationCenter from './NotificationCenter'

afterEach(cleanup)

describe('NotificationCenter', () => {
  it('labels the unread view and displays an empty state after all items are read', async () => {
    const user = userEvent.setup()

    render(
      <NotificationsProvider>
        <NotificationCenter isOpen onOpenChange={() => undefined} />
      </NotificationsProvider>,
    )

    await user.click(screen.getByRole('radio', { name: 'Unread' }))

    expect(screen.getByRole('heading', { name: 'Unread notifications' })).toBeTruthy()

    while (screen.queryAllByRole('button', { name: /^Mark .* as read$/ }).length > 0) {
      await user.click(screen.getAllByRole('button', { name: /^Mark .* as read$/ })[0])
    }

    expect(screen.getByText('No unread notifications.')).toBeTruthy()
  })
})
