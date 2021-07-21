import currency from 'currency.js'

const getRandomColor = () => 'hsl(' + Math.round(Math.random() * 359) + ',100%,50%)'

const getPesoFormatted = (value) => currency(value, { separator: '.', decimal: ',', symbol: '$ ' })

const getPriceFormatted = (price) => (price ? getPesoFormatted(price).format() : 0)

const checkIfProductExistInFavorite = (products, productId) =>
  products.some((product) => product.id === productId)

const getPriceRound = (highPrice, lowPrice) =>
  Math.round(((highPrice - lowPrice) / highPrice) * 100)

const getStarsToRate = (rate) => {
  const QUANTITY_STARS = 5
  return [...Array(QUANTITY_STARS).keys()].map((star) =>
    rate >= star + 1 ? 'full' : rate > star ? 'half' : 'empty'
  )
}

export {
  getRandomColor,
  getPriceFormatted,
  getPriceRound,
  getStarsToRate,
  checkIfProductExistInFavorite,
}
