import type { ReactNode } from 'react'
import AppHeader from './AppHeader'
import styles from './AppShell.module.sass'

interface AppShellProps {
  children?: ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.shell}>
      <AppHeader />
      <main className={`${styles.container} ${styles.main}`}>{children}</main>
    </div>
  )
}
