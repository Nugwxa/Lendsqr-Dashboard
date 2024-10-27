import countUsers from './countUsers'
import getUsers from '../getUsers'

jest.mock('../getUsers')

const mockUsers = [
  { id: '1', status: 'active', loans: [], savings: [] },
  { id: '2', status: 'inactive', loans: [{ id: 'loan1' }], savings: [] },
  { id: '3', status: 'active', loans: [], savings: [{ id: 'savings1' }] },
]

describe('countUsers', () => {
  beforeEach(() => {
    ;(getUsers as jest.Mock).mockResolvedValue(mockUsers)
  })

  it('counts all users if no filter is provided', async () => {
    const count = await countUsers()
    expect(count).toBe(3)
  })

  it('counts active users', async () => {
    const count = await countUsers('active-users')
    expect(count).toBe(2)
  })

  it('counts users with loans', async () => {
    const count = await countUsers('users-with-loans')
    expect(count).toBe(1)
  })

  it('counts users with savings', async () => {
    const count = await countUsers('users-with-savings')
    expect(count).toBe(1)
  })

  it('returns 0 if an invalid filter key is provided', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const count = await countUsers('non-existent-filter' as any)
    expect(count).toBe(0)
  })
})
