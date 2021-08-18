const mockResponse = jest.fn()

const mockGet = mockResponse

jest.mock('@base/service/apiClient', () =>
  jest.fn(() => ({
    request: jest.fn(() => ({
      get: mockGet,
    })),
  }))
)

import LocalApi from '@base/service/local.service'
const localApi = new LocalApi()

describe('LocalService', () => {
  afterEach(() => {
    mockGet.mockClear()
  })
  it('tests getCategories', async () => {
    const mockGetCategoriesResponse = { data: { test_case: '__TEST__' } }
    mockResponse.mockImplementation(() => mockGetCategoriesResponse)
    const categories = await localApi.getCategories()
    expect(mockGet).toHaveBeenCalledWith('/categories')
    expect(categories).toEqual(mockGetCategoriesResponse)
  })

  it('tests getProductsByCategorie', async () => {
    const mockGetProductsByCategorieResponse = { data: { results: [{ id: '__ID__' }] } }
    mockResponse.mockImplementation(() => mockGetProductsByCategorieResponse)
    const categorieId = '__CATEGORIE_ID__'
    const query = { params: { page: 1 } }
    const productsByCategorie = await localApi.getProductsByCategorie(
      categorieId,
      query.params.page
    )
    expect(mockGet).toHaveBeenCalledWith(`/categories/${categorieId}/products`, query)
    expect(productsByCategorie).toEqual(mockGetProductsByCategorieResponse)
  })

  it('tests getProductById', async () => {
    const mockGetProductsByIdResponse = { product: { id: '__ID__' } }
    mockResponse.mockImplementation(() => mockGetProductsByIdResponse)
    const productId = '__PRODUCT_ID__'
    const productById = await localApi.getProductById(productId)
    expect(mockGet).toHaveBeenCalledWith(`/product/${productId}`)
    expect(productById).toEqual(mockGetProductsByIdResponse)
  })

  it('tests getShippingOptionsByProductIdAndZipCode', async () => {
    const mockGetShippingOptionsResponse = { shipping_options: { id: '__ID__' } }
    mockResponse.mockImplementation(() => mockGetShippingOptionsResponse)
    const productId = '__PRODUCT_ID__'
    const query = { params: { zip_code: 696 } }

    const shippingOptions = await localApi.getShippingOptionsByProductIdAndZipCode(
      productId,
      query.params.zip_code
    )
    expect(mockGet).toHaveBeenCalledWith(`/product/${productId}/shipping`, query)
    expect(shippingOptions).toEqual(mockGetShippingOptionsResponse)
  })

  it('tests getProductsByQuery', async () => {
    const mockGetProductsByQueryResponse = { products: [{ id: '__ID__' }] }
    mockResponse.mockImplementation(() => mockGetProductsByQueryResponse)
    const query = { params: { page: 1, query: '__QUERY__' } }

    const productsByQuerySearch = await localApi.getProductsByQuery(
      query.params.query,
      query.params.page
    )
    expect(mockGet).toHaveBeenCalledWith(`/products`, query)
    expect(productsByQuerySearch).toEqual(mockGetProductsByQueryResponse)
  })

  it('tests getZipCode', async () => {
    const mockGetZipCodeResponse = { postal_code: 5000 }
    mockResponse.mockImplementation(() => mockGetZipCodeResponse)
    const zipCode = await localApi.getZipCode()
    expect(mockGet).toHaveBeenCalledWith(`/zipcode`)
    expect(zipCode).toEqual(mockGetZipCodeResponse)
  })
})
