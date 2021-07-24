import * as actionTypes from './actionTypes'

export const setZipCode = (zipCode) => {
  return { type: actionTypes.SET_ZIPCODE, zipCode: zipCode }
}
