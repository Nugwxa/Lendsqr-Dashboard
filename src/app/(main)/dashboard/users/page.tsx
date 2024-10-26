import {
  CoinDocumentIcon,
  Users3Icon,
  Users4Icon,
} from '@/components/Icons/General'
import { CoinsIcon } from '@/components/Icons/Sidebar'
import { countUsers } from '@/app/data/user'
import { formatNumberWithCommas } from '@/app/utils'
import styles from './page.module.scss'
import type { Metadata } from 'next'
import UserStatContainer from '@/components/UserStatContainer'

export const metadata: Metadata = {
  title: 'Users | Lendsqr Test - OJ Abba',
}

export default async function Home() {
  const userCount = await countUsers()
  const activeUserCount = await countUsers('active-users')
  const usersWithLoansCount = await countUsers('users-with-loans')
  const usersWithSavingsCount = await countUsers('users-with-savings')
  return (
    <>
      <h2 className={'dashboardTitle'}>Users</h2>
      <section>
        <div className={styles.statsWrapper}>
          <UserStatContainer
            color="pink"
            label="users"
            icon={<Users3Icon />}
            value={formatNumberWithCommas(userCount)}
          />
          <UserStatContainer
            color="purple"
            label="active users"
            icon={<Users4Icon />}
            value={formatNumberWithCommas(activeUserCount)}
          />
          <UserStatContainer
            color="orange"
            label="users with loans"
            icon={<CoinDocumentIcon />}
            value={formatNumberWithCommas(usersWithLoansCount)}
          />
          <UserStatContainer
            color="red"
            label="users with savings"
            icon={<CoinsIcon />}
            value={formatNumberWithCommas(usersWithSavingsCount)}
          />
        </div>
      </section>

      <section>Table Here</section>
    </>
  )
}
