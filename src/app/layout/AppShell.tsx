import { useState } from 'react'
import type { ReactNode } from 'react'
import AppHeader from './AppHeader'
import NotificationCenter from '../../modules/notifications/components/NotificationCenter/NotificationCenter'
import styles from './AppShell.module.sass'

interface AppShellProps {
  children?: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false)

  return (
    <div className={styles.shell}>
      <AppHeader onOpenNotifications={() => setIsNotificationCenterOpen(true)} />
      <main id="main-content" className={`${styles.container} ${styles.main}`}>{children}</main>
      <NotificationCenter
        isOpen={isNotificationCenterOpen}
        onOpenChange={setIsNotificationCenterOpen}
      />
    </div>
  )
}
