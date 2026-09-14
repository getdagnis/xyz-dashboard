import { useCustomer } from '../../useCustomer';
import Card from '../../../../design-system/components/Card/Card';
import styles from './CustomerOverviewCard.module.sass';

export default function CustomerOverviewCard() {
  const { data: customer, isLoading, isError } = useCustomer();

  return (
    <Card eyebrow="Account" title="Customer overview">
      {isLoading ? <p className={styles.empty}>Loading customer information…</p> : null}
      {isError ? <p>Unable to load customer information.</p> : null}
      {customer ? (
        <dl className={styles.details}>
          <div>
            <dt>Name</dt>
            <dd>
              {customer.firstName} {customer.lastName}
            </dd>
          </div>
          <div>
            <dt>Portal role</dt>
            <dd>{customer.portalRole}</dd>
          </div>
          <div>
            <dt>Organization</dt>
            <dd>{customer.organization}</dd>
          </div>
          <div>
            <dt>Account type</dt>
            <dd>{customer.accountType}</dd>
          </div>
          <div>
            <dt>Account number</dt>
            <dd>{customer.accountNumber}</dd>
          </div>
          <div>
            <dt>Account status</dt>
            <dd>{customer.accountStatus}</dd>
          </div>
        </dl>
      ) : null}
    </Card>
  );
}
