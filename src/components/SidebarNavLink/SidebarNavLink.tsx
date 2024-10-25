'use client'

import { usePathname } from 'next/navigation'
import Button from '@/components/Button'
import classNames from 'classnames'
import Link from 'next/link'
import styles from './SidebarNavLink.module.scss'

interface SidebarNavLinkProps {
  icon: React.ReactNode
  text: React.ReactNode
  href?: string
}

/**
 * Renders a navigation link in the sidebar.
 * It displays an icon and text, and applies an active class if the link is currently active.
 *
 * @param {React.ReactNode} icon - The icon to display next to the link text.
 * @param {React.ReactNode} text - The text label for the link.
 * @param {string} [href] - The URL the link points to (optional).
 */
export default function SidebarNavLink(props: Readonly<SidebarNavLinkProps>) {
  const { icon, text, href } = props

  // Get the current pathname
  const pathname = usePathname()

  // Determine if the current link is active based on the pathname
  const isActive = pathname.startsWith(href ?? '')

  // Render the button as a link if an href is provided
  if (href)
    return (
      <Button
        mode="transparent"
        className={classNames(styles.button, {
          [styles.active]: isActive, // Apply active class if the link is active
          [styles.fullOpacity]: isActive, // Full opacity for active link
        })}
        as={Link}
        href={href}
        icon={icon}
      >
        {text}
      </Button>
    )

  // Render a button without a link if href is not provided
  return (
    <Button
      mode="transparent"
      className={classNames(styles.button, styles.fullOpacity)} // Full opacity for non-link button
      icon={icon}
    >
      {text}
    </Button>
  )
}
