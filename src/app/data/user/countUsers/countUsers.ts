import getUsers from '../getUsers'

type FilterKeys = 'active-users' | 'users-with-loans' | 'users-with-savings'

/**
 * Counts users based on specific filter criteria.
 *
 * @param {FilterKeys} [filterKey] - The key representing the user group to filter by:
 *  - 'active-users': Counts users with an active status.
 *  - 'users-with-loans': Counts users with at least one loan.
 *  - 'users-with-savings': Counts users with at least one savings account.
 */
export default async function countUsers(filterKey?: FilterKeys) {
  const users = await getUsers()

  if (!filterKey) {
    return users.length
  }

  switch (filterKey) {
    case 'active-users':
      return users.filter((user) => user.status === 'active').length
    case 'users-with-loans':
      return users.filter((user) => user.loans.length > 0).length
    case 'users-with-savings':
      return users.filter((user) => user.savings.length > 0).length
    default:
      return 0
  }
}
