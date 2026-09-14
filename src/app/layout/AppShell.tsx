import { useState } from 'react'
import type { ReactNode } from 'react'
import AppHeader from './AppHeader'
import NotificationCenter from '../../modules/notifications/components/NotificationCenter/NotificationCenter'
import { useNotifications } from '../../modules/notifications/NotificationsContext'
import styles from './AppShell.module.sass'

interface AppShellProps {
  children?: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false)
  const { unreadCount } = useNotifications()

  return (
    <div className={styles.shell}>
      <AppHeader
        unreadCount={unreadCount}
        onOpenNotifications={() => setIsNotificationCenterOpen(true)}
      />
      <main id="main-content" className={`${styles.container} ${styles.main}`}>{children}</main>
      <NotificationCenter
        isOpen={isNotificationCenterOpen}
        onOpenChange={setIsNotificationCenterOpen}
      />
    </div>
  )
}
