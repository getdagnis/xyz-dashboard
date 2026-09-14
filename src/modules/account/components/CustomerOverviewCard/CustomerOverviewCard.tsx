import Card from '../../../../design-system/components/Card/Card';
import styles from './CustomerOverviewCard.module.sass';

export default function CustomerOverviewCard() {
  return (
    <Card eyebrow="Account" title="Customer overview">
      <dl className={styles.details}>
        <div>
          <dt>Name</dt>
          <dd>Jordan Smith</dd>
        </div>
        <div>
          <dt>Portal role</dt>
          <dd>IT service manager</dd>
        </div>
        <div>
          <dt>Organization</dt>
          <dd>Northstar Logistics</dd>
        </div>
        <div>
          <dt>Account type</dt>
          <dd>Enterprise account</dd>
        </div>
        <div>
          <dt>Account number</dt>
          <dd>NL-004182</dd>
        </div>
        <div>
          <dt>Account status</dt>
          <dd>Active</dd>
        </div>
      </dl>
    </Card>
  );
}
