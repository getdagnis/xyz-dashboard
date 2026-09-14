import { useCustomer } from '../../modules/account/useCustomer';
import xyzLogo from '../../../assets/xyz-logo.svg';
import IconButton from '../../design-system/components/IconButton/IconButton';
import styles from './AppHeader.module.sass';

interface AppHeaderProps {
  unreadCount: number;
  onOpenNotifications: () => void;
}

export default function AppHeader({ unreadCount, onOpenNotifications }: AppHeaderProps) {
  const { data: customer } = useCustomer();

  const initials = customer ? `${customer.firstName[0]}${customer.lastName[0]}`.toUpperCase() : '…';

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <img className={styles.logo} src={xyzLogo} alt="XYZ" />
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.title}>Customer Portal</span>
        </div>
        <div className={styles.account}>
          <IconButton
            className={styles.notifications}
            aria-label={`${unreadCount} unread notifications`}
            data-empty={unreadCount === 0 || undefined}
            onPress={onOpenNotifications}
          >
            <svg className={styles.notificationIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
            </svg>
            {unreadCount > 0 && (
              <span className={styles.badge} aria-hidden="true">
                {unreadCount}
              </span>
            )}
          </IconButton>
          <div className={styles.profile}>
            <span className={styles.avatar} aria-hidden="true">
              {initials}
            </span>

            <div className={styles.details}>
              <span className={styles.name}>
                {customer?.firstName && customer?.lastName ? (
                  <>
                    {customer.firstName} {customer.lastName}
                  </>
                ) : (
                  'Loading account…'
                )}
              </span>
              {customer?.organization && <span className={styles.organization}>{customer.organization}</span>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
