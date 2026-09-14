import Button from '../../../../design-system/components/Button/Button';
import Card from '../../../../design-system/components/Card/Card';
import Chip from '../../../../design-system/components/Chip/Chip';
import styles from './OpenServiceTicketsCard.module.sass';

const tickets = [
  {
    id: 'INC-24081',
    subject: 'Intermittent VPN connection and firewall issues',
    status: 'Processing',
    statusTone: 'neutral' as const,
    priority: 'High',
    priorityTone: 'danger-strong' as const,
    updated: '12 min ago',
  },
  {
    id: 'REQ-19803',
    subject: 'New employee workstation',
    status: 'Waiting approval',
    statusTone: 'warning' as const,
    priority: 'Medium',
    priorityTone: 'info' as const,
    updated: '2 days ago',
  },
  {
    id: 'INC-23976',
    subject: 'Email access issue',
    status: 'Resolved',
    statusTone: 'success' as const,
    priority: 'Low',
    priorityTone: 'neutral' as const,
    updated: '5 days ago',
  },
];

export default function OpenServiceTicketsCard() {
  return (
    <div className={styles.module}>
      <Card eyebrow="Service desk" title="Open service tickets">
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
                  <td>
                    <Chip tone={ticket.statusTone}>{ticket.status}</Chip>
                  </td>
                  <td>
                    <Chip tone={ticket.priorityTone}>{ticket.priority}</Chip>
                  </td>
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
                <Chip tone={ticket.statusTone} aria-label={`Status: ${ticket.status}`}>
                  {ticket.status}
                </Chip>
                <Chip tone={ticket.priorityTone} aria-label={`Priority: ${ticket.priority}`}>
                  {ticket.priority}
                </Chip>
                <time className={styles.updated} aria-label={`Updated ${ticket.updated}`}>
                  Updated {ticket.updated}
                </time>
              </div>
            </li>
          ))}
        </ul>
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
