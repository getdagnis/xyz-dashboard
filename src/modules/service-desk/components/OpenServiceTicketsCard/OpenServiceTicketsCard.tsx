import { useQuery } from '@tanstack/react-query'
import Button from '../../../../design-system/components/Button/Button';
import Card from '../../../../design-system/components/Card/Card';
import Chip from '../../../../design-system/components/Chip/Chip';
import type { ChipTone } from '../../../../design-system/components/Chip/Chip'
import { getTickets } from '../../../../services/serviceTicketService'
import type { ServiceTicketPriority, ServiceTicketStatus } from '../../../../services/mockData'
import styles from './OpenServiceTicketsCard.module.sass';

const statusTones: Record<ServiceTicketStatus, ChipTone> = {
  Processing: 'neutral',
  'Waiting approval': 'warning',
  Resolved: 'success',
}

const priorityTones: Record<ServiceTicketPriority, ChipTone> = {
  High: 'danger-strong',
  Medium: 'info',
  Low: 'neutral',
}

export default function OpenServiceTicketsCard() {
  const { data: tickets, isLoading, isError } = useQuery({
    queryKey: ['service-tickets'],
    queryFn: ({ signal }) => getTickets(signal),
  })

  const content = isLoading ? <p>Loading service tickets…</p>
    : isError ? <p>Unable to load service tickets.</p>
      : tickets?.length === 0 ? <p>No open service tickets.</p>
        : tickets ? (
          <>
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Status</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td>{ticket.id}</td>
                      <td>{ticket.subject}</td>
                      <td><Chip tone={statusTones[ticket.status]}>{ticket.status}</Chip></td>
                      <td><Chip tone={priorityTones[ticket.priority]}>{ticket.priority}</Chip></td>
                      <td>{ticket.updated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className={styles.mobileList} aria-label="Open service tickets">
              {tickets.map((ticket) => (
                <li key={ticket.id} className={styles.mobileTicket}>
                  <div className={styles.ticketHeading}>
                    <span className={styles.ticketId}>{ticket.id}</span>
                    <span className={styles.ticketSubject}>{ticket.subject}</span>
                  </div>
                  <div className={styles.ticketDetails}>
                    <Chip tone={statusTones[ticket.status]} aria-label={`Status: ${ticket.status}`}>{ticket.status}</Chip>
                    <Chip tone={priorityTones[ticket.priority]} aria-label={`Priority: ${ticket.priority}`}>{ticket.priority}</Chip>
                    <time className={styles.updated} aria-label={`Updated ${ticket.updated}`}>Updated {ticket.updated}</time>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : null

  return (
    <div className={styles.module}>
      <Card eyebrow="Service desk" title="Open service tickets">
        {content}
      </Card>
      <div className={styles.actions}>
        <Button type="button" variant="secondary">
          Manage tickets
        </Button>
        <Button type="button">Open ticket</Button>
      </div>
    </div>
  );
}
