import { useQuery } from '@tanstack/react-query'
import Button from '../../../../design-system/components/Button/Button';
import Card from '../../../../design-system/components/Card/Card';
import Chip from '../../../../design-system/components/Chip/Chip';
import type { ChipTone } from '../../../../design-system/components/Chip/Chip'
import type { ShipmentStatus } from '../../../../services/mockData'
import { getOrders } from '../../../../services/orderService'
import styles from './RecentOrdersCard.module.sass';

const shipmentTones: Record<ShipmentStatus, ChipTone> = {
  Processing: 'neutral',
  Shipped: 'success',
  Delayed: 'warning',
  Delivered: 'success-strong',
}

export default function RecentOrdersCard() {
  const { data: orders, isLoading, isError } = useQuery({
    queryKey: ['recent-orders'],
    queryFn: ({ signal }) => getOrders(signal),
  })

  const content = isLoading ? <p className={styles.empty}>Loading recent orders…</p>
    : isError ? <p>Unable to load recent orders.</p>
      : orders?.length === 0 ? <p>No recent orders.</p>
        : orders ? (
          <>
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Order</th><th scope="col">Summary</th><th scope="col">Shipment status</th><th scope="col">Total</th><th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td><td>{order.summary}</td>
                      <td><Chip tone={shipmentTones[order.shipmentStatus]}>{order.shipmentStatus}</Chip></td>
                      <td>{order.total}</td><td>{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className={styles.mobileList} aria-label="Recent orders">
              {orders.map((order) => (
                <li key={order.id} className={styles.mobileOrder}>
                  <div className={styles.orderHeading}>
                    <span className={styles.orderId}>{order.id}</span><span className={styles.orderSummary}>{order.summary}</span>
                  </div>
                  <div className={styles.orderDetails}>
                    <Chip tone={shipmentTones[order.shipmentStatus]} aria-label={`Shipment status: ${order.shipmentStatus}`}>{order.shipmentStatus}</Chip>
                    <span className={styles.total}>{order.total}</span>
                    <time className={styles.date} dateTime={order.dateTime} aria-label={`Order date: ${order.date}`}>{order.date}</time>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : null

  return (
    <div className={styles.module}>
      <Card eyebrow="Eshop" title="Recent orders">
        {content}
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
