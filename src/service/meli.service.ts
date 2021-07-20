import ApiClient from './apiClient'
import { CategoriesType, CategorieType } from '@base/types'

class MeliService {
  apiClient: any
  request: any
  constructor() {
    this.apiClient = new ApiClient('https://api.mercadolibre.com')
    this.request = this.apiClient.request()
  }

  async getCategories(): Promise<CategoriesType[]> {
    return this.request.get('/sites/MLA/categories')
  }

  async getCategorie(categoryId: string): Promise<CategorieType> {
    return this.request.get(`/categories/${categoryId}`)
  }

  async getProductsByCategory(categoryId: string, pageNumber: number) {
    return this.request.get('/sites/MLA/search', {
      params: {
        category: categoryId,
        offset: 50 * pageNumber,
      },
    })
  }

  async getProductById(productId: string) {
    return this.request.get(`/items/${productId}`)
  }

  async getProductsByQuery(query: string, page: number): Promise<any> {
    return this.request.get(`/sites/MLA/search`, {
      params: {
        q: query,
        offset: 50 * page,
      },
    })
  }

  async getRatedProductById(productID) {
    return this.request.get(`/reviews/item/${productID}`)
  }

  async getDescriptionByProductId(productID) {
    return this.request.get(`/items/${productID}/description`)
  }

  async getShippingOptionsByProductId(productID) {
    return this.request.get(`/items/${productID}/shipping_options`, {
      params: {
        zip_code: 5000,
      },
    })
  }
}

export default MeliService
