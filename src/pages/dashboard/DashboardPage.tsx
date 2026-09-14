import { useState } from 'react'
import CustomerOverviewCard from '../../modules/account/components/CustomerOverviewCard/CustomerOverviewCard'
import RecentOrdersCard from '../../modules/commerce/components/RecentOrdersCard/RecentOrdersCard'
import RecentNotificationsCard from '../../modules/notifications/components/RecentNotificationsCard/RecentNotificationsCard'
import GlobalSearch from '../../modules/search/components/GlobalSearch/GlobalSearch'
import SearchResults from '../../modules/search/components/SearchResults/SearchResults'
import { getPreviewSearchGroups } from '../../modules/search/data/searchPreviewFixture'
import OpenServiceTicketsCard from '../../modules/service-desk/components/OpenServiceTicketsCard/OpenServiceTicketsCard'
import styles from './DashboardPage.module.sass'

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const isSearching = searchQuery.trim().length > 0

  return (
    <div className={styles.page}>
      <div className={styles.hero} aria-hidden="true" />
      <header className={styles.introduction}>
        <time className={styles.date} dateTime="2026-09-14">Monday, 14 September 2026</time>
        <h1 className={styles.title}>Good morning, Jordan</h1>
        <p className={styles.subtitle}>Here’s the latest activity across your XYZ services</p>
      </header>
      <GlobalSearch value={searchQuery} onChange={setSearchQuery} />
      {isSearching ? (
        <SearchResults query={searchQuery} groups={getPreviewSearchGroups(searchQuery)} />
      ) : (
        <>
          <div className={styles.cards}>
            <CustomerOverviewCard />
            <RecentNotificationsCard />
          </div>
          <OpenServiceTicketsCard />
          <RecentOrdersCard />
        </>
      )}
    </div>
  )
}
