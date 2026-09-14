import { useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from 'react-aria-components'
import Button from '../../../../design-system/components/Button/Button'
import Card from '../../../../design-system/components/Card/Card'
import { useNotifications } from '../../NotificationsContext'
import styles from './RecentNotificationsCard.module.sass'

export default function RecentNotificationsCard() {
  const [filter, setFilter] = useState<'all' | 'unread'>('all')
  const { notifications, isNotificationsError, isNotificationsLoading, openNotificationCenter } = useNotifications()
  const visibleNotifications = notifications
    .filter((notification) => filter === 'all' || notification.unread)
    .slice(0, 3)

  return (
    <Card
      className={styles.card}
      eyebrow="Notifications"
      title="Recent notifications"
      headerAction={
        <ToggleButtonGroup
          className={styles.filters}
          aria-label="Filter notifications"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={[filter]}
          onSelectionChange={(keys) => setFilter(keys.has('unread') ? 'unread' : 'all')}
        >
          <ToggleButton className={styles.filter} id="unread">Unread</ToggleButton>
          <ToggleButton className={styles.filter} id="all">All</ToggleButton>
        </ToggleButtonGroup>
      }
      >
      <div className={styles.content}>
        {isNotificationsLoading ? <p className={styles.empty}>Loading notifications…</p> : null}
        {isNotificationsError ? <p className={styles.empty}>Unable to load notifications.</p> : null}
        {!isNotificationsLoading && !isNotificationsError && visibleNotifications.length === 0 ? (
          <p className={styles.empty}>{filter === 'unread' ? 'No unread notifications.' : 'No notifications.'}</p>
        ) : !isNotificationsLoading && !isNotificationsError ? (
          <ul className={styles.list}>
            {visibleNotifications.map((notification) => (
              <li key={notification.id} className={notification.unread ? styles.unread : styles.read}>
                <span className={styles.dot} aria-hidden="true" />
                <span>
                  <span className={styles.status}>{notification.unread ? 'Unread: ' : 'Read: '}</span>
                  {notification.text}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className={styles.footer}>
        <Button variant="action" onPress={openNotificationCenter}>View all</Button>
      </div>
    </Card>
  )
}
