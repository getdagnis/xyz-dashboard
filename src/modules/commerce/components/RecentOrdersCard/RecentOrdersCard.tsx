import Button from '../../../../design-system/components/Button/Button';
import Card from '../../../../design-system/components/Card/Card';
import Chip from '../../../../design-system/components/Chip/Chip';
import styles from './RecentOrdersCard.module.sass';

const orders = [
  {
    id: 'ORD-10492',
    summary: '12 laptops and docking stations',
    shipmentStatus: 'Processing',
    shipmentTone: 'neutral' as const,
    total: '€18,240.00',
    date: 'Sep 10, 2026',
    dateTime: '2026-09-06',
  },
  {
    id: 'ORD-10457',
    summary: '24 office monitors',
    shipmentStatus: 'Shipped',
    shipmentTone: 'success' as const,
    total: '€6,720.00',
    date: 'Sep 7, 2026',
    dateTime: '2026-09-05',
  },
  {
    id: 'ORD-10398',
    summary: 'Network equipment',
    shipmentStatus: 'Delayed',
    shipmentTone: 'warning' as const,
    total: '€8,910.00',
    date: 'Aug 24, 2026',
    dateTime: '2026-08-24',
  },
  {
    id: 'ORD-10371',
    summary: 'Mobile device accessories',
    shipmentStatus: 'Delivered',
    shipmentTone: 'success-strong' as const,
    total: '€3,480.00',
    date: 'Aug 18, 2026',
    dateTime: '2026-08-18',
  },
];

export default function RecentOrdersCard() {
  return (
    <div className={styles.module}>
      <Card eyebrow="Eshop" title="Recent orders">
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Order</th>
                <th scope="col">Summary</th>
                <th scope="col">Shipment status</th>
                <th scope="col">Total</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.summary}</td>
                  <td>
                    <Chip tone={order.shipmentTone}>{order.shipmentStatus}</Chip>
                  </td>
                  <td>{order.total}</td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className={styles.mobileList} aria-label="Recent orders">
          {orders.map((order) => (
            <li key={order.id} className={styles.mobileOrder}>
              <div className={styles.orderHeading}>
                <span className={styles.orderId}>{order.id}</span>
                <span className={styles.orderSummary}>{order.summary}</span>
              </div>
              <div className={styles.orderDetails}>
                <Chip tone={order.shipmentTone} aria-label={`Shipment status: ${order.shipmentStatus}`}>
                  {order.shipmentStatus}
                </Chip>
                <span className={styles.total}>{order.total}</span>
                <time className={styles.date} dateTime={order.dateTime} aria-label={`Order date: ${order.date}`}>
                  {order.date}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </Card>
      <div className={styles.actions}>
        <Button type="button" variant="secondary">
          Order history
        </Button>
        <Button type="button">Track order</Button>
      </div>
    </div>
  );
}
