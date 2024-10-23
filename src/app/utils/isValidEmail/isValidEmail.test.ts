import isValidEmail from './isValidEmail'

describe('isValidEmail Tests', () => {
  it('should return true for valid email addresses', () => {
    const validEmails = [
      'test@example.com',
      'user.name+tag+sorting@example.com',
      'user_name@example.co.uk',
      'username@example.org',
      'username@subdomain.example.com',
      'username123@domain.com',
      'user-name@domain.com',
      'user.name@domain.com',
      'user@domain.info',
    ]

    validEmails.forEach((email) => {
      expect(isValidEmail(email)).toBe(true)
    })
  })

  it('should return false for invalid email addresses', () => {
    const invalidEmails = [
      'plainaddress',
      '@missingusername.com',
      'username@.com',
      'username@domain..com',
      'username@domain.com.',
      'username@domain.c',
      'username@domain#example.com',
      'user@domain,com',
      'user@.com',
      'user@domain..com',
      'user@domain.c@om',
      'username@',
    ]

    invalidEmails.forEach((email) => {
      expect(isValidEmail(email)).toBe(false)
    })
  })
})
