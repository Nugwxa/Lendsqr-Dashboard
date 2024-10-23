/**
 * Checks if the given string is a valid email format.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, otherwise false.
 *
 * @example
 * isValidEmail("hello@example.com") // true
 *
 * @example
 * isValidEmail("hello@.com") // false
 */
export default function isValidEmail(email: string): boolean {
  const emailRegex =
    /^(?!.*\.\.)([a-zA-Z0-9._%+-]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  return emailRegex.test(email)
}
