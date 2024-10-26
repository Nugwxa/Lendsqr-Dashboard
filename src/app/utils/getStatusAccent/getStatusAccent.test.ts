import getStatusAccent from './getStatusAccent'

describe('getStatusAccent', () => {
  it('should return blue for active status', () => {
    expect(getStatusAccent('active')).toBe('green')
  })

  it('should return red for blacklisted status', () => {
    expect(getStatusAccent('blacklisted')).toBe('red')
  })

  it('should return blue for inactive status', () => {
    expect(getStatusAccent('inactive')).toBe('blue')
  })

  it('should return yellow for pending status', () => {
    expect(getStatusAccent('pending')).toBe('yellow')
  })

  it('should return blue for any unrecognized status', () => {
    expect(getStatusAccent('unknown' as UserAccountStatus)).toBe('blue')
  })
})
