const mockGetResponse = jest.fn()

jest.mock('@base/service/apiClient', () =>
  jest.fn(() => ({
    request: jest.fn(() => ({
      get: mockGetResponse,
    })),
  }))
)

import ZipCodeSevice from '@base/service/zipcode.service'
const zipCodeSevice = new ZipCodeSevice()

describe('LocalService', () => {
  afterEach(() => {
    mockGetResponse.mockClear()
  })
  it('tests getZipCode', async () => {
    const apiZipCode = '__API_ZIP_CODE__'
    process.env.NEXT_PUBLIC_PRODUCTION_API_ZIPCODE = apiZipCode

    const mockGetZipCodeResponse = { postal_code: 5000 }
    mockGetResponse.mockImplementation(() => mockGetZipCodeResponse)
    const categories = await zipCodeSevice.getZipCode()
    const query = { params: { api_key: apiZipCode } }
    expect(mockGetResponse).toHaveBeenCalledWith('/v1/', query)
    expect(categories).toEqual(mockGetZipCodeResponse)
  })
})
