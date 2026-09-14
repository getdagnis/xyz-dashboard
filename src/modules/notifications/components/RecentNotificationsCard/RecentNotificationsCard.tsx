import { useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from 'react-aria-components'
import Card from '../../../../design-system/components/Card/Card'
import styles from './RecentNotificationsCard.module.sass'

// Temporary presentation entries; notification fetching and read mutations are deferred.
const notifications = [
  { id: 'ticket-update', text: 'Ticket INC-24081 was updated by the service team', unread: true },
  { id: 'order-dispatched', text: 'Order ORD-10492 has been dispatched', unread: true },
  { id: 'request-approval', text: 'Request REQ-19803 is waiting for approval', unread: false },
]

export default function RecentNotificationsCard() {
  const [filter, setFilter] = useState<'all' | 'unread'>('all')
  const visibleNotifications = notifications.filter((notification) => filter === 'all' || notification.unread)

  return (
    <Card
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
      <ul className={styles.list}>
        {visibleNotifications.map((notification) => (
          <li key={notification.id} className={notification.unread ? styles.unread : styles.read}>
            <svg className={styles.bell} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 22c1.1 0 1.99-.9 1.99-2h-4c0 1.1.9 2 2.01 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
            <span>
              <span className={styles.status}>{notification.unread ? 'Unread: ' : 'Read: '}</span>
              {notification.text}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
