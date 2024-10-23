import { isValidEmail } from '@/app/utils'
import { redirect } from 'next/navigation'
import handleLoginForm from './handleLoginForm'

jest.mock('@/app/utils', () => ({
  isValidEmail: jest.fn(),
}))

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}))

describe('handleLoginForm', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should return error if email is missing', async () => {
    const formData = new FormData()
    const response = await handleLoginForm({}, formData)
    expect(response).toEqual({
      success: false,
      message: 'Invalid submission! Missing data.',
    })
  })

  test('should return error if password is missing', async () => {
    const formData = new FormData()
    formData.append('email', 'test@example.com')
    const response = await handleLoginForm({}, formData)
    expect(response).toEqual({
      success: false,
      message: 'Invalid submission! Missing data.',
    })
  })

  test('should return error if email is invalid', async () => {
    const formData = new FormData()
    formData.append('email', 'invalid-email')
    formData.append('password', 'password')
    ;(isValidEmail as jest.Mock).mockReturnValue(false)
    const response = await handleLoginForm({}, formData)
    expect(response).toEqual({
      success: false,
      message: 'Invalid email.',
    })
  })

  test('should return error if password is too short', async () => {
    const formData = new FormData()
    formData.append('email', 'test@example.com')
    formData.append('password', '12')
    ;(isValidEmail as jest.Mock).mockReturnValue(true)
    const response = await handleLoginForm({}, formData)
    expect(response).toEqual({
      success: false,
      message: 'password length must be at least 8 characters long.',
    })
  })

  test('should redirect to dashboard on successful login', async () => {
    const formData = new FormData()
    formData.append('email', 'test@example.com')
    formData.append('password', 'password')
    ;(isValidEmail as jest.Mock).mockReturnValue(true)
    await handleLoginForm({}, formData)
    expect(redirect).toHaveBeenCalledWith('/dashboard/users')
  })
})
