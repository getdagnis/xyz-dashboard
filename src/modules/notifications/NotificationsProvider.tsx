import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getNotifications } from '../../services/notificationService'
import type { NotificationItem } from '../../services/mockData'
import { NotificationsContext } from './NotificationsContext'

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false)
  const queryClient = useQueryClient()
  const { data: notifications = [], isLoading: isNotificationsLoading, isError: isNotificationsError } = useQuery({
    queryKey: ['notifications'],
    queryFn: ({ signal }) => getNotifications(signal),
  })
  const unreadCount = notifications.filter((notification) => notification.unread).length
  const value = useMemo(
    () => ({
      notifications,
      unreadCount,
      isNotificationsLoading,
      isNotificationsError,
      isNotificationCenterOpen,
      openNotificationCenter: () => setIsNotificationCenterOpen(true),
      onNotificationCenterOpenChange: setIsNotificationCenterOpen,
      markAsRead: (notificationId: string) => {
        queryClient.setQueryData<readonly NotificationItem[]>(['notifications'], (currentNotifications = []) => (
          currentNotifications.map((notification) => (
            notification.id === notificationId ? { ...notification, unread: false } : notification
          ))
        ))
      },
    }),
    [isNotificationCenterOpen, isNotificationsError, isNotificationsLoading, notifications, queryClient, unreadCount],
  )

  return <NotificationsContext value={value}>{children}</NotificationsContext>
}
