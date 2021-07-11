import currency from 'currency.js'

const getRandomColor = () => 'hsl(' + Math.round(Math.random() * 359) + ',100%,50%)'

const getPesoFormatted = (value) => currency(value, { separator: '.', decimal: ',', symbol: '$ ' })

const getPriceFormatted = (price) => (price ? getPesoFormatted(price).format() : 0)

const getPriceRound = (highPrice, lowPrice) =>
  Math.round(((highPrice - lowPrice) / highPrice) * 100)

export { getRandomColor, getPriceFormatted, getPriceRound }
