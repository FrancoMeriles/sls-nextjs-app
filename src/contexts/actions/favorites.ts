import * as actionTypes from './actionTypes'

export interface Product {
  id: string
  title: string
  thumbnail: string
  price: number
  original_price?: number
}

export interface FavoritesAction {
  type: string
  product?: Product
  id?: string
  products?: Product[]
}

export const addFavorite = (product: Product): FavoritesAction => {
  return { type: actionTypes.ADD_FAVORITE, product: product }
}

export const removeFavorite = (id: string): FavoritesAction => {
  return { type: actionTypes.REMOVE_FAVORITE, id: id }
}

export const batchFavorites = (products: Product[]): FavoritesAction => {
  return { type: actionTypes.BATCH_FAVORITES, products: products }
}
