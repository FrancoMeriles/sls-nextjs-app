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

  async getProductsByCategory(categoryId: string) {
    return this.request.get('/sites/MLA/search', {
      params: {
        category: categoryId,
      },
    })
  }
}

export default MeliService
