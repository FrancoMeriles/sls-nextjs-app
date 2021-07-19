import currency from 'currency.js'

const getRandomColor = () => 'hsl(' + Math.round(Math.random() * 359) + ',100%,50%)'

const getPesoFormatted = (value) => currency(value, { separator: '.', decimal: ',', symbol: '$ ' })

const getPriceFormatted = (price) => (price ? getPesoFormatted(price).format() : 0)

const getPriceRound = (highPrice, lowPrice) =>
  Math.round(((highPrice - lowPrice) / highPrice) * 100)

const getStarsToRate = (rate) => {
  const QUANTITY_STARS = 5

  const rates = []
  for (let i = 1; i <= QUANTITY_STARS; i++) {
    const star = rate >= i ? 'full' : rate > i - 1 ? 'half' : 'full'
    rates.push(star)
  }
  return rates
}

export { getRandomColor, getPriceFormatted, getPriceRound, getStarsToRate }
