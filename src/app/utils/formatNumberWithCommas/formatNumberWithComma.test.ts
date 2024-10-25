import formatNumberWithCommas from './formatNumberWithCommas'

describe('formatNumberWithCommas', () => {
  // Positive test cases
  it('should format an integer with commas', () => {
    expect(formatNumberWithCommas(1234567)).toBe('1,234,567')
  })

  it('should format a floating-point number with commas', () => {
    expect(formatNumberWithCommas(1234567.89)).toBe('1,234,567.89')
  })

  it('should format a negative integer with commas', () => {
    expect(formatNumberWithCommas(-1234567)).toBe('-1,234,567')
  })

  it('should format a negative floating-point number with commas', () => {
    expect(formatNumberWithCommas(-1234567.89)).toBe('-1,234,567.89')
  })

  it('should format a number less than 1000 without commas', () => {
    expect(formatNumberWithCommas(999)).toBe('999')
  })

  // Negative test cases
  it('should handle zero correctly', () => {
    expect(formatNumberWithCommas(0)).toBe('0')
  })

  it('should handle a number with only decimal points without commas', () => {
    expect(formatNumberWithCommas(0.1234)).toBe('0.1234')
  })

  it('should handle very large numbers', () => {
    expect(formatNumberWithCommas(123456789012345)).toBe('123,456,789,012,345')
  })
})
