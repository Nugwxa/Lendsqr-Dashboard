'use server'
import { isValidEmail } from '@/app/utils'
import { redirect } from 'next/navigation'

/**
 * Handles the login form submission.
 *
 * @param {any} prevState - The previous state before the form submission
 * @param {FormData} formData - The FormData object
 * @returns {Promise<ActionResponse>} A promise that resolves to an object indicating
 * the success of the action and a message.
 */
export default async function handleLoginForm(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
): Promise<ActionResponse> {
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  const success = false

  if (!email || !password)
    return {
      success,
      message: 'Invalid submission! Missing data.',
    }

  if (!isValidEmail(email)) {
    return {
      success,
      message: 'Invalid email.',
    }
  }

  if (password.length < 8) {
    return {
      success: false,
      message: 'password length must be at least 8 characters long.',
    }
  }

  redirect('/dashboard/users')
}
