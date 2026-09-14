import { useQuery } from '@tanstack/react-query'
import Card from '../../../../design-system/components/Card/Card';
import { getCustomer } from '../../../../services/customerService'
import styles from './CustomerOverviewCard.module.sass';

export default function CustomerOverviewCard() {
  const { data: customer, isLoading, isError } = useQuery({
    queryKey: ['customer'],
    queryFn: ({ signal }) => getCustomer(signal),
  })

  return (
    <Card eyebrow="Account" title="Customer overview">
      {isLoading ? <p className={styles.empty}>Loading customer information…</p> : null}
      {isError ? <p>Unable to load customer information.</p> : null}
      {customer ? (
        <dl className={styles.details}>
          <div><dt>Name</dt><dd>{customer.name}</dd></div>
          <div><dt>Portal role</dt><dd>{customer.portalRole}</dd></div>
          <div><dt>Organization</dt><dd>{customer.organization}</dd></div>
          <div><dt>Account type</dt><dd>{customer.accountType}</dd></div>
          <div><dt>Account number</dt><dd>{customer.accountNumber}</dd></div>
          <div><dt>Account status</dt><dd>{customer.accountStatus}</dd></div>
        </dl>
      ) : null}
    </Card>
  );
}
