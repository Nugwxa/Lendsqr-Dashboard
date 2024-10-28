import '@/styles/globals.scss'
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
  return (
    <div className={styles.wrapper}>
      <DashboardHeader />

      <div className={styles.container}>
        <DashboardSidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
