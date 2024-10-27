import {
  CoinDocumentIcon,
  Coins2Icon,
  Users3Icon,
  Users4Icon,
} from '@/components/Icons/General'
import { countUsers } from '@/app/data/user'
import { formatNumberWithCommas } from '@/app/utils'
import styles from './page.module.scss'
import type { Metadata } from 'next'
import UserStatContainer from '@/components/UserStatContainer'
import UserTable from '@/components/UserTable'

export const metadata: Metadata = {
  title: 'Users | Lendsqr Test - OJ Abba',
}

type SearchParam = {
  query?: string
  page?: string
  perPage?: string
}
// eslint-disable-next-line
interface UsersPageProps {
  searchParams: Promise<SearchParam>
}

export default async function UserPage(props: Readonly<UsersPageProps>) {
  const { searchParams } = props

  const resolvedSearchParams = await searchParams
  const page = parseInt(resolvedSearchParams.page ?? '1', 10) || 1
  const perPage = parseInt(resolvedSearchParams.perPage ?? '10', 10) || 10

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
            icon={<Coins2Icon />}
            value={formatNumberWithCommas(usersWithSavingsCount)}
          />
        </div>
      </section>

      <UserTable page={page} perPage={perPage} totalUsers={userCount} />
    </>
  )
}
