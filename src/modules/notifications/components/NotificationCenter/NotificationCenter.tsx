import { useState } from 'react';
import { Dialog, Modal, ModalOverlay, ToggleButton, ToggleButtonGroup } from 'react-aria-components';
import IconButton from '../../../../design-system/components/IconButton/IconButton';
import Card from '../../../../design-system/components/Card/Card';
import { useNotifications } from '../../NotificationsContext';
import styles from './NotificationCenter.module.sass';

interface NotificationCenterProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function NotificationCenter({ isOpen, onOpenChange }: NotificationCenterProps) {
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const { markAsRead, notifications } = useNotifications();
  const visibleNotifications = notifications.filter((notification) => filter === 'all' || notification.unread);

  return (
    <ModalOverlay className={styles.overlay} isDismissable isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal className={styles.modal}>
        <Dialog className={styles.dialog} aria-label="Notification center">
          {({ close }) => (
            <>
              <header className={styles.header}>
                <h2 className={styles.title}>Notification center</h2>
                <IconButton aria-label="Close notification center" onPress={close}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="m5 5 14 14M19 5 5 19" />
                  </svg>
                </IconButton>
              </header>
              <Card
                eyebrow="Notifications"
                title="All notifications"
                headerAction={
                  <ToggleButtonGroup
                    className={styles.filters}
                    aria-label="Filter notifications"
                    selectionMode="single"
                    disallowEmptySelection
                    selectedKeys={[filter]}
                    onSelectionChange={(keys) => setFilter(keys.has('unread') ? 'unread' : 'all')}
                  >
                    <ToggleButton className={styles.filter} id="unread">
                      Unread
                    </ToggleButton>
                    <ToggleButton className={styles.filter} id="all">
                      All
                    </ToggleButton>
                  </ToggleButtonGroup>
                }
              >
                <ul className={styles.list}>
                  {visibleNotifications.map((notification) => (
                    <li key={notification.id} className={notification.unread ? styles.unread : styles.read}>
                      <span className={styles.dot} aria-hidden="true" />
                      <span>{notification.text}</span>
                      {notification.unread && (
                        <IconButton
                          className={styles.markRead}
                          aria-label={`Mark ${notification.text} as read`}
                          onPress={() => markAsRead(notification.id)}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            aria-hidden="true"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        </IconButton>
                      )}
                    </li>
                  ))}
                </ul>
              </Card>
            </>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
