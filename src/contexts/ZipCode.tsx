import { useReducer, useContext, createContext, useEffect, useState } from 'react'
import ZipCodeService from '@base/service/zipcode.service'
import * as actionTypes from './actions/actionTypes'
import * as zipCodeAction from './actions/zipCode'

const ZipCodeStateContext = createContext(null)
const ZipCodeDispatchContext = createContext(null)

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ZIPCODE: {
      const newZipCode = action.zipCode
      localStorage.setItem('zipCode', action.zipCode)
      return newZipCode
    }
    default:
      return state
  }
}

export const ZipCodeProvider = ({ children }) => {
  const [initialState, setInitialState] = useState(1013)
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const zipCodeLocalStorage = localStorage.getItem('zipCode')
    const getZipCode = async () => {
      const zipCodeApi = new ZipCodeService()
      const zipCode = await zipCodeApi.getZipCode()
      dispatch(zipCodeAction.setZipCode(Number(zipCode.postal_code) || initialState))
      setInitialState(Number(zipCode.postal_code))
    }
    getZipCode()
    if (zipCodeLocalStorage) {
      dispatch(zipCodeAction.setZipCode(zipCodeLocalStorage))
    }
  }, [])

  return (
    <ZipCodeDispatchContext.Provider value={dispatch}>
      <ZipCodeStateContext.Provider value={state}>{children}</ZipCodeStateContext.Provider>
    </ZipCodeDispatchContext.Provider>
  )
}

export const useZipCode = () => useContext(ZipCodeStateContext)
export const useDispatchZipCode = () => useContext(ZipCodeDispatchContext)
