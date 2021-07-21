import ApiClient from './apiClient'
import { CategoriesType, CategorieType, PagingType, ProductsType } from '@base/types'

class LocalApi {
  apiClient: any
  request: any
  constructor() {
    this.apiClient = new ApiClient(process.env.NEXT_PUBLIC_PRODUCTION_API_HOST)
    this.request = this.apiClient.request()
  }

  async getCategories(): Promise<CategoriesType[]> {
    return this.request.get('/categories')
  }

  async getProductsByCategorie(
    categorieId: string,
    pageNumber: number
  ): Promise<{ categorie: CategorieType; products: ProductsType; paging: PagingType }> {
    return this.request.get(`/categories/${categorieId}/products`, {
      params: {
        page: pageNumber,
      },
    })
  }

  async getProductById(id: string): Promise<any> {
    return this.request.get(`/product/${id}`)
  }

  async getProductsByQuery(query: string, page: number): Promise<any> {
    return this.request.get(`/products`, {
      params: {
        query,
        page,
      },
    })
  }
}

export default LocalApi
