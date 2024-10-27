import getUser from './getUser'
import getUsers from '../getUsers'

jest.mock('../getUsers')

const mockUsers = [
  { id: '1', status: 'active', loans: [], savings: [] },
  { id: '2', status: 'inactive', loans: [{ id: 'loan1' }], savings: [] },
  { id: '3', status: 'active', loans: [], savings: [{ id: 'savings1' }] },
]

describe('getUser', () => {
  beforeEach(() => {
    ;(getUsers as jest.Mock).mockResolvedValue(mockUsers)
  })

  it('returns a user by ID if found', async () => {
    const user = await getUser('1')
    expect(user).toEqual(mockUsers[0])
  })

  it('returns null if the user ID does not exist', async () => {
    const user = await getUser('non-existent-id')
    expect(user).toBeNull()
  })
})
