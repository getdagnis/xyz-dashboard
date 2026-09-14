import CustomerOverviewCard from '../../modules/account/components/CustomerOverviewCard/CustomerOverviewCard'
import RecentNotificationsCard from '../../modules/notifications/components/RecentNotificationsCard/RecentNotificationsCard'
import GlobalSearch from '../../modules/search/components/GlobalSearch/GlobalSearch'
import OpenServiceTicketsCard from '../../modules/service-desk/components/OpenServiceTicketsCard/OpenServiceTicketsCard'
import styles from './DashboardPage.module.sass'

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <header className={styles.introduction}>
        <time className={styles.date} dateTime="2026-09-14">Monday, 14 September 2026</time>
        <h1 className={styles.title}>Good morning, Jordan</h1>
        <p className={styles.subtitle}>Here’s the latest activity across your XYZ services</p>
      </header>
      <GlobalSearch />
      <div className={styles.cards}>
        <CustomerOverviewCard />
        <RecentNotificationsCard />
      </div>
      <OpenServiceTicketsCard />
    </div>
  )
}
