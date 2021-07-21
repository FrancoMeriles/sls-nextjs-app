import { useReducer, useContext, createContext, useEffect, useState } from 'react'
import * as actionTypes from './actions/actionTypes'
import * as favoriteAction from './actions/favorites'

const addFavorite = (state, action) => [...state, action.product]
const batchFavorites = (state, action) => [...state, ...action.products]
const removeFavorite = (state, action) => state.filter((product) => product.id !== action.id)

const FavoriteStateContext = createContext(null)
const FavoriteDispatchContext = createContext(null)

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE: {
      const newState = addFavorite(state, action)
      localStorage.setItem('favoriteProducts', JSON.stringify(newState))
      return newState
    }
    case actionTypes.REMOVE_FAVORITE: {
      const newState = removeFavorite(state, action)
      localStorage.setItem('favoriteProducts', JSON.stringify(newState))
      return newState
    }
    case actionTypes.BATCH_FAVORITES:
      return batchFavorites(state, action)
    default:
      return state
  }
}

export const FavoriteProvider = ({ children }) => {
  const [initialState, setInitialState] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const favoriteProductsLocalStorage = localStorage.getItem('favoriteProducts')
    if (favoriteProductsLocalStorage) {
      dispatch(favoriteAction.batchFavorites(JSON.parse(favoriteProductsLocalStorage)))
      setInitialState(JSON.parse(favoriteProductsLocalStorage))
    }
  }, [])

  return (
    <FavoriteDispatchContext.Provider value={dispatch}>
      <FavoriteStateContext.Provider value={state}>{children}</FavoriteStateContext.Provider>
    </FavoriteDispatchContext.Provider>
  )
}

export const useFavorite = () => useContext(FavoriteStateContext)
export const useDispatchFavorite = () => useContext(FavoriteDispatchContext)
