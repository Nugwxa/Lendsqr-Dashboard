/**
 * Gets the accent color based on the user's account status.
 *
 * @param {UserAccountStatus} status - The status of the user account.
 * @returns {string} The accent color associated with the given status.
 */
export default function getStatusAccent(status: UserAccountStatus): string {
  switch (status) {
    case 'active':
      return 'green'
    case 'blacklisted':
      return 'red'
    case 'inactive':
      return 'blue'
    case 'pending':
      return 'yellow'
    default:
      return 'blue'
  }
}
