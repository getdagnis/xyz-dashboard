import { useId } from 'react'
import type { ReactNode } from 'react'
import styles from './Card.module.sass'

export interface CardProps {
  eyebrow?: string
  title: string
  headerAction?: ReactNode
  children: ReactNode
}

export default function Card({ eyebrow, title, headerAction, children }: CardProps) {
  const headingId = useId()

  return (
    <section className={styles.card} aria-labelledby={headingId}>
      <header className={styles.header}>
        <div>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={headingId} className={styles.title}>{title}</h2>
        </div>
        {headerAction && <div className={styles.action}>{headerAction}</div>}
      </header>
      {children}
    </section>
  )
}
