import ApiClient from '@base/service/apiClient'

const mockGet = jest.fn()
const mockPost = jest.fn()
const mockPut = jest.fn()
const mockDelete = jest.fn()

jest.mock('axios', () => ({
  create: () => ({ get: mockGet, post: mockPost, put: mockPut, delete: mockDelete }),
}))

const URL = '__URL__'
const QUERY = '__QUERY__'
const BODY = '__BODY__'
describe('ApiClient', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('exports correct object', () => {
    const apiClient = new ApiClient('test').request()

    expect(apiClient.post).not.toBeNull()
    expect(apiClient.put).not.toBeNull()
    expect(apiClient.get).not.toBeNull()
    expect(apiClient.delete).not.toBeNull()
  })

  it('should execute get method ', async () => {
    mockGet.mockImplementation(() => Promise.resolve(true))
    const apiClient = new ApiClient('test').request()
    await apiClient.get(URL, QUERY)
    expect(mockGet).toHaveBeenCalledWith(URL, QUERY)
  })

  it('should execute post method ', async () => {
    mockPost.mockImplementation(() => Promise.resolve(true))
    const apiClient = new ApiClient('test').request()
    await apiClient.post(URL, BODY)
    expect(mockPost).toHaveBeenCalledWith(URL, BODY)
  })

  it('should execute put method ', async () => {
    mockPut.mockImplementation(() => Promise.resolve(true))
    const apiClient = new ApiClient('test').request()
    await apiClient.put(URL, BODY)
    expect(mockPut).toHaveBeenCalledWith(URL, BODY)
  })

  it('should execute delete method ', async () => {
    mockDelete.mockImplementation(() => Promise.resolve(true))
    const apiClient = new ApiClient('test').request()
    await apiClient.delete(URL)
    expect(mockDelete).toHaveBeenCalledWith(URL)
  })
})
