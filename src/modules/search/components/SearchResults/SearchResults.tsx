import { useId } from 'react';
import type { SearchResultGroup } from '../../types';
import styles from './SearchResults.module.sass';

interface SearchResultsProps {
  query: string;
  groups: readonly SearchResultGroup[];
  isSettled: boolean;
}

function GroupContent({ group }: { group: SearchResultGroup }) {
  if (group.state === 'loading') {
    return <p className={styles.state}>Loading results…</p>;
  }

  if (group.state === 'error') {
    return <p className={styles.state}>Unable to load results from this source.</p>;
  }

  if (group.state === 'empty' || group.results.length === 0) {
    return <p className={styles.state}>No results from this source.</p>;
  }

  return (
    <ul className={styles.list}>
      {group.results.map((result) => (
        <li key={result} className={styles.result}>
          {result}
        </li>
      ))}
    </ul>
  );
}

export default function SearchResults({ query, groups, isSettled }: SearchResultsProps) {
  const headingId = useId();

  const resultCount = groups.reduce((total, group) => total + group.results.length, 0);

  const hasErrors = groups.some((group) => group.state === 'error');

  return (
    <section className={styles.surface} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.visuallyHidden}>
        Search results for “{query}”
      </h2>
      <p className={styles.visuallyHidden} role="status" aria-atomic="true">
        {isSettled
          ? `Search complete. ${resultCount} ${
              resultCount === 1 ? 'result' : 'results'
            } found for ${query}.${hasErrors ? ' Some sources could not be loaded.' : ''}`
          : `Searching for ${query}.`}
      </p>
      {groups.length === 0 ? (
        <p className={styles.noResults}>No results found</p>
      ) : (
        <div className={styles.groups}>
          {groups.map((group) => {
            const groupHeadingId = `${headingId}-${group.id}`;

            return (
              <section key={group.id} className={styles.group} aria-labelledby={groupHeadingId}>
                <h2 id={groupHeadingId} className={styles.groupHeading}>
                  {group.label}
                </h2>
                <GroupContent group={group} />
              </section>
            );
          })}
        </div>
      )}
    </section>
  );
}
