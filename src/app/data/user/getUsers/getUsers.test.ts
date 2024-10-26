import getUsers from './getUsers'

global.fetch = jest.fn()

describe('getUsers', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('returns users when the API response is successful', async () => {
    const mockUsers = [{ id: '1' }, { id: '2' }]
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    })

    const users = await getUsers()
    expect(users).toEqual(mockUsers)
  })

  it('returns an empty array if the API response fails', async () => {
    ;(fetch as jest.Mock).mockResolvedValueOnce({ ok: false })

    const users = await getUsers()
    expect(users).toEqual([])
  })
})
