import ApiClient from './apiClient'
import { CategoriesType, CategorieType } from '@base/types'

class LocalApi {
  apiClient: any
  request: any
  constructor() {
    this.apiClient = new ApiClient('http://localhost:3000/api')
    this.request = this.apiClient.request()
  }

  async getCategories(): Promise<CategoriesType[]> {
    return this.request.get('/categories')
  }

  async getCategorie(categorieId: string): Promise<CategorieType> {
    return this.request.get(`/categories/${categorieId}`)
  }
}

export default LocalApi
