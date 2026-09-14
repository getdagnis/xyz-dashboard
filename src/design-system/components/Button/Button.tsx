import { forwardRef } from 'react'
import { Button as AriaButton } from 'react-aria-components'
import type { ButtonProps as AriaButtonProps } from 'react-aria-components'
import styles from './Button.module.sass'

export interface ButtonProps extends AriaButtonProps {
  variant?: 'primary' | 'secondary'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', className, ...props }, ref,
) {
  return (
    <AriaButton
      {...props}
      ref={ref}
      data-variant={variant}
      className={(state) => [
        styles.button,
        typeof className === 'function' ? className(state) : className,
      ].filter(Boolean).join(' ')}
    />
  )
})

export default Button
