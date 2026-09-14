import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { notifications as initialNotifications } from './data/notifications'
import { NotificationsContext } from './NotificationsContext'

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState(initialNotifications)
  const unreadCount = notifications.filter((notification) => notification.unread).length
  const value = useMemo(
    () => ({
      notifications,
      unreadCount,
      markAsRead: (notificationId: string) => {
        setNotifications((currentNotifications) => currentNotifications.map((notification) => (
          notification.id === notificationId ? { ...notification, unread: false } : notification
        )))
      },
    }),
    [notifications, unreadCount],
  )

  return <NotificationsContext value={value}>{children}</NotificationsContext>
}
