import currency from 'currency.js'

/**
 * {getRandomColor}
 * it should generate a random color hsl
 */

export const getRandomColor = () => 'hsl(' + Math.round(Math.random() * 359) + ',100%,50%)'

/**
 * {getPesoFormatted} given a string of numbers
 * it should converte into a number with currency format
 */

const getPesoFormatted = (price: number): any =>
  currency(price, { separator: '.', decimal: ',', symbol: '$ ' })

/**
 * {getPriceFormatted} given a string of numbers
 * it should get the format
 * then should return the correct format otherwise return 0
 */

interface Price {
  (price: number): number
}

export const getPriceFormatted: Price = (price: number) =>
  price ? getPesoFormatted(price).format() : 0

/**
 * {checkIfProductExistInFavorite} given a array of producst and a product id
 * it should check if the product id exist en the array
 * then should return a boolean
 */

interface Product {
  id: string
}

interface CheckProductExist {
  (products: Product[], productId: string): boolean
}

export const checkIfProductExistInFavorite: CheckProductExist = (products, productId) =>
  products.some((product) => product.id === productId)

/**
 * {getDiscountedPrice} given two prices one higher and other lower
 * it should calculate the difference of the prices
 * then should return the percentage
 */

interface DiscountedPrice {
  (highPrice: number, lowPrice: number): number
}
export const getDiscountedPrice: DiscountedPrice = (highPrice, lowPrice) =>
  Math.round(((highPrice - lowPrice) / highPrice) * 100)

/**
 * {getStarsToRate} given a number betwen 0 and 5
 * it should calculate how many colorate stars should render
 * then should a array of 5 string
 */

interface StarsToRate {
  (rate: number): string[]
}

export const getStarsToRate: StarsToRate = (rate: number) => {
  const QUANTITY_STARS = 5
  return [...Array(QUANTITY_STARS).keys()].map((star) =>
    rate >= star + 1 ? 'full' : rate > star ? 'half' : 'empty'
  )
}
