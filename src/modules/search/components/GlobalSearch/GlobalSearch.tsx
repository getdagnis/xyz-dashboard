import { Button, Input, SearchField, Text } from 'react-aria-components';
import styles from './GlobalSearch.module.sass';

interface GlobalSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function GlobalSearch({ value, onChange }: GlobalSearchProps) {
  return (
    <SearchField className={styles.field} aria-label="Global search" value={value} onChange={onChange}>
      <div className={styles.control}>
        <Input className={styles.input} placeholder="What can we help you find?" />
        <span className={styles.details}>
          <Text slot="description" className={styles.description}>
            Search products, guides and tickets
          </Text>
          <Button className={styles.clear} aria-label="Clear search">
            <svg className={styles.clearIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Button>
          <svg className={styles.icon} viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </span>
      </div>
    </SearchField>
  );
}
