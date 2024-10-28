'use client'
import { BellIcon, DropdownIcon, MenuIcon, Xicon } from '../Icons/General'
import { useSidebarStore } from '@/stores/useSidebarStore'
import Button from '../Button'
import classNames from 'classnames'
import Image from 'next/image'
import LendsqrLogo from '../LendsqrLogo'
import Link from 'next/link'
import SearchInput from '../SearchInput'
import styles from './DashboardHeader.module.scss'

/**
 * Header menu for the dashboard.
 */
export default function DashboardHeader() {
  const { sidebarIsOpen, setSidebarIsOpen } = useSidebarStore()

  const icon = sidebarIsOpen ? <Xicon /> : <MenuIcon />
  return (
    <header className={styles.header}>
      <div className={styles.headerLogoArea}>
        <Link href={'/'}>
          <LendsqrLogo width={144.8} height={30} />
        </Link>
      </div>

      <nav className={styles.headerNav}>
        <div className={styles.headerNavLeft}>
          <Button
            className={styles.headerNavLeftToggle}
            mode="transparent"
            icon={icon}
            onClick={() => {
              setSidebarIsOpen(!sidebarIsOpen)
            }}
          />
          <SearchInput className={styles.headerNavLeftInput} />
        </div>

        <div className={styles.headerNavRight}>
          <Link
            className={classNames(styles.link, styles.mobileHidden)}
            href={'#docs'}
          >
            Docs
          </Link>

          <Button
            className={classNames(styles.mobileHidden)}
            mode="transparent"
            icon={<BellIcon />}
          />

          <div className={styles.headerNavRightDetails}>
            <Image
              className={styles.headerNavRightDetailsImg}
              src={'/assets/img/dashboard/avatar.png'}
              priority
              width={48}
              height={48}
              alt="profile img"
            />

            <span className={styles.headerNavRightDetailsDropdown}>
              Adedeji <DropdownIcon />
            </span>
          </div>
        </div>
      </nav>
    </header>
  )
}
