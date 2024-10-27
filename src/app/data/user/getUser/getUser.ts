import getUsers from '../getUsers'

/**
 * Retrieves a specific user by their ID.
 *
 * @param {string} userID - The unique identifier of the user to retrieve.
 * @returns {Promise<User | null>} - The user object if found, or `null` if not found.
 */
export default async function getUser(userID: string): Promise<UserDTO | null> {
  const users = await getUsers()
  return users.find((user) => user.id === userID) || null
}
