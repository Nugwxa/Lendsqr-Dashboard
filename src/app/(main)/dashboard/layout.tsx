'use client'
import '@/styles/globals.scss'
import { useState } from 'react'
import DashboardHeader from '@/components/DashboardHeader'
import DashboardSidebar from '@/components/DashboardSidebar'
import styles from './layout.module.scss'

/*

The layout wraps the main content of the dashboard.
Manages the sidebar's open/close state and renders the header and sidebar.

*/
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(true)
  return (
    <div className={styles.wrapper}>
      <DashboardHeader
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />

      <div className={styles.container}>
        <DashboardSidebar sidebarIsOpen={sidebarIsOpen} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
