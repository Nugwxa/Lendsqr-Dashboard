'use client'
import { BellIcon, DropdownIcon, MenuIcon, Xicon } from '../Icons/General'
import { Dispatch, SetStateAction } from 'react'
import Button from '../Button'
import classNames from 'classnames'
import Image from 'next/image'
import LendsqrLogo from '../LendsqrLogo'
import Link from 'next/link'
import SearchInput from '../SearchInput'
import styles from './DashboardHeader.module.scss'

interface DashboardHeaderProps {
  sidebarIsOpen: boolean
  setSidebarIsOpen: Dispatch<SetStateAction<boolean>>
}

/**
 * Header menu for the dashboard.
 *
 * @param {boolean} sidebarIsOpen - Indicates if the sidebar is currently open.
 * @param {Dispatch<SetStateAction<boolean>>} setSidebarIsOpen - Function to toggle sidebar open/close state.
 */
export default function DashboardHeader(props: Readonly<DashboardHeaderProps>) {
  const { sidebarIsOpen, setSidebarIsOpen } = props

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
