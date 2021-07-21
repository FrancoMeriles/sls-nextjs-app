import * as actionTypes from './actionTypes'

export const addFavorite = (product) => {
  return { type: actionTypes.ADD_FAVORITE, product: product }
}

export const removeFavorite = (id) => {
  return { type: actionTypes.REMOVE_FAVORITE, id: id }
}

export const batchFavorites = (products) => {
  return { type: actionTypes.BATCH_FAVORITES, products: products }
}
