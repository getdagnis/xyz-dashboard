import { createContext, useContext } from 'react'
import type { NotificationItem } from './data/notifications'

export interface NotificationsContextValue {
  notifications: NotificationItem[]
  unreadCount: number
  markAsRead: (notificationId: string) => void
}

export const NotificationsContext = createContext<NotificationsContextValue | null>(null)

export function useNotifications() {
  const context = useContext(NotificationsContext)

  if (!context) {
    throw new Error('useNotifications must be used within NotificationsProvider')
  }

  return context
}
