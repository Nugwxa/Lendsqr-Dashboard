'use client'
import {
  BreifcaseIcon,
  ChevronDownIcon,
  HomeIcon,
  SignOutIcon,
} from '../Icons/Sidebar'
import { navLinks } from './data'
import { useSidebarStore } from '@/stores/useSidebarStore'
import classNames from 'classnames'
import SidebarNavLink from '../SidebarNavLink'
import styles from './DashboardSidebar.module.scss'

/**
 * Renders the dashboard's sidebar with navigation links.
 */
export default function DashboardSidebar() {
  const { sidebarIsOpen } = useSidebarStore()
  return (
    <aside
      className={classNames(styles.sidebar, {
        [styles.openSidebar]: sidebarIsOpen,
      })}
    >
      <SidebarNavLink
        icon={<BreifcaseIcon />}
        text={
          <>
            Switch Organization <ChevronDownIcon />
          </>
        }
      />

      <SidebarNavLink
        href="/dashboard/home"
        icon={<HomeIcon />}
        text={'Dashboard'}
      />

      <div className={styles.sidebarWrapper}>
        {navLinks.map((group) => {
          return (
            <div key={group.groupName} className={styles.navGroup}>
              <p className={styles.navGroupName}>{group.groupName}</p>
              {group.links.map((link) => {
                return (
                  <SidebarNavLink
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    text={link.label}
                  />
                )
              })}
            </div>
          )
        })}
      </div>

      <div className={styles.sidebarFooter}>
        <SidebarNavLink icon={<SignOutIcon />} text={'Logout'} />

        <span className={styles.sidebarFooterVersion}>V1.2.0</span>
      </div>
    </aside>
  )
}
