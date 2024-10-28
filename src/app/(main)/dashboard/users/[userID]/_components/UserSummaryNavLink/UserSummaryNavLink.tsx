'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import styles from './UserSummaryNavLink.module.scss'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

interface UserSummaryNavLinkProps {
  label: string
  href: string
}

/**
 * Renders a styled navigation link as a button,
 * highlighting it if the current URL matches the target `href`.
 *
 * @param {string} label - The text to display on the navigation button.
 * @param {string} href - The URL that the button navigates to.
 *
 */

export default function UserSummaryNavLink(
  props: Readonly<UserSummaryNavLinkProps>
) {
  const { label, href } = props

  // Get the current pathname
  const pathname = usePathname()

  // Determine if the button should be styled as active by comparing paths
  const isActive = pathname === href
  return (
    <Button
      className={classNames(styles.button, {
        // Apply active styling if the link is active
        [styles.active]: isActive,
      })}
      as={Link}
      href={href}
      mode="transparent"
    >
      {label}
    </Button>
  )
}
