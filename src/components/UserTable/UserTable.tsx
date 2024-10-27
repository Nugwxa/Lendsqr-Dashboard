'use client'

import { formatDate } from '@/app/utils'
import { getUsers } from '@/app/data/user'
import { useEffect, useState } from 'react'
import Badge from '../Badge'
import classNames from 'classnames'
import getStatusAccent from '@/app/utils/getStatusAccent'
import PageLimitControl from '../PageLimitControl'
import Pagination from '../Pagination'
import React from 'react'
import styles from '@/styles/tableStyles.module.scss'
import TableFilterButton from './TableFilterButton'
import UserActionsDropdown from './UserActionsDropdown'

interface UserTableProps extends React.ComponentPropsWithoutRef<'section'> {
  page: number
  perPage: number
  className?: string
  totalUsers: number
}

/**
 * Renders a paginated table of users with filtering options.
 * @param {number} page - Current page number for pagination
 * @param {number} perPage - Number of users to be displayed per page
 * @param {number} totalUsers - Total number of users available
 * @param {string} page - Additional class names (optional)
 */
export default function UserTable(props: Readonly<UserTableProps>) {
  const { className, page, perPage, totalUsers } = props
  const [users, setUsers] = useState<UserDTO[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch users when the component mounts or when page/perPage changes
  useEffect(() => {
    async function fetchUsers() {
      setLoading(true)
      const data = await getUsers({ page, perPage })
      setUsers(data)
      setLoading(false)
    }
    fetchUsers()
  }, [page, perPage])

  // Show suspense when loading
  if (loading)
    return (
      <section
        className={classNames(styles.suspense, styles.container)}
      ></section>
    )

  const usersArePresent = users.length > 0

  return (
    <section className={classNames(className, styles.container)}>
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th>
                <TableFilterButton label="Organization" />
              </th>

              <th>
                <TableFilterButton label="Username" />
              </th>
              <th>
                <TableFilterButton label="Email" />
              </th>
              <th>
                <TableFilterButton label="Phone Number" />
              </th>
              <th>
                <TableFilterButton label="Date Joined" />
              </th>
              <th>
                <TableFilterButton label="Status" />
              </th>
              <th>{/* Action */}</th>
            </tr>
          </thead>

          {usersArePresent && (
            <tbody className={styles.tableBody}>
              {users.map((user) => {
                const date = new Date(user.registrationDate)
                const accent = getStatusAccent(user.status)
                return (
                  <tr key={user.id}>
                    <td>{user.organisation}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{formatDate(date)}</td>
                    <td>
                      <Badge color={accent}>{user.status}</Badge>
                    </td>
                    <td>
                      <UserActionsDropdown userID={user.id} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          )}
        </table>

        {!usersArePresent && (
          <div className={styles.emptyTableAlert}>No User Found</div>
        )}
      </div>

      <div className={styles.footer}>
        <PageLimitControl totalCount={totalUsers} />
        <div>
          <Pagination totalPages={Math.ceil(totalUsers / perPage)} />
        </div>
      </div>
    </section>
  )
}
