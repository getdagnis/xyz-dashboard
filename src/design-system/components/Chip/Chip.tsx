import type { ComponentPropsWithoutRef } from 'react'
import styles from './Chip.module.sass'

export type ChipTone =
  | 'neutral'
  | 'warning'
  | 'success'
  | 'success-strong'
  | 'danger-strong'
  | 'info'

export interface ChipProps extends ComponentPropsWithoutRef<'span'> {
  tone: ChipTone
}

export default function Chip({ className, tone, ...props }: ChipProps) {
  return (
    <span
      {...props}
      className={[styles.chip, className].filter(Boolean).join(' ')}
      data-tone={tone}
    />
  )
}
