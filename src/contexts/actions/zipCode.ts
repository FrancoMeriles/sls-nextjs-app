import * as actionTypes from './actionTypes'

export interface ZipCodeActions {
  type: string
  zipCode: number
}

export const setZipCode = (zipCode: number): ZipCodeActions => {
  return { type: actionTypes.SET_ZIPCODE, zipCode: zipCode }
}
