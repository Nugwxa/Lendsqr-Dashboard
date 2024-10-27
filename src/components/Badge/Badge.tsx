'use client'
import classNames from 'classnames'
import styles from './Badge.module.scss'

interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  children: React.ReactNode
  className?: string
  color: string
}

/**
 * Renders a badge with optional custom classes.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the badge.
 * @param {string} className - Additional class names to apply to the badge.
 * @param {string} color - The color of the badge, which determines the accent class.
 */
export default function Badge(props: Readonly<BadgeProps>): JSX.Element {
  const { color, className, children, ...rest } = props

  // Dynamically generate the accent class based on the `color` prop
  const accentClass = styles[`${color}Accent`]
  return (
    <span
      className={classNames(className, styles.badge, accentClass)}
      {...rest}
    >
      {children}
    </span>
  )
}
