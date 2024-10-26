import { ApiUrl } from '../data'

/**
 * Returns a list of users
 */
export default async function getUsers(): Promise<UserDTO[]> {
  const response = await fetch(ApiUrl)

  if (!response.ok) return []

  const users: UserDTO[] = await response.json()
  return users
}
