import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Button as AriaButton } from 'react-aria-components'
import type { ButtonProps as AriaButtonProps } from 'react-aria-components'
import styles from './IconButton.module.sass'

export interface IconButtonProps extends Omit<AriaButtonProps, 'aria-label' | 'aria-labelledby' | 'children'> {
  'aria-label': string
  children: ReactNode
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { children, className, ...props }, ref,
) {
  return (
    <AriaButton
      {...props}
      ref={ref}
      className={(state) => [
        styles.button,
        typeof className === 'function' ? className(state) : className,
      ].filter(Boolean).join(' ')}
    >
      <span className={styles.icon} aria-hidden="true">{children}</span>
    </AriaButton>
  )
})

export default IconButton
