import { ApiUrl } from '../data'

/**
 * Returns a list of users, optionally paginated
 * @param pagination - An object containing `page` and `perPage` (optional)
 * @returns A list of users, paginated if `pagination` is provided
 */
export default async function getUsers(pagination?: {
  page: number
  perPage: number
}): Promise<UserDTO[]> {
  const response = await fetch(ApiUrl)
  if (!response.ok) return []

  const users: UserDTO[] = await response.json()

  // If no pagination is provided, return the full list of users
  if (!pagination) {
    return users
  }

  const { page, perPage } = pagination

  // Validate pagination inputs
  if (page < 1 || perPage < 1) {
    return []
  }

  // Calculate total pages
  const totalPages = Math.ceil(users.length / perPage)

  if (page > totalPages) return []

  // Calculate start and end points for pagination
  const startIndex = (page - 1) * perPage
  const endIndex = startIndex + perPage

  // Return the users for the current page
  return users.slice(startIndex, endIndex)
}
