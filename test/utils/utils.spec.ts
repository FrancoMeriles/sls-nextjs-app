import {
  getPriceFormatted,
  checkIfProductExistInFavorite,
  getRandomColor,
  getDiscountedPrice,
  getStarsToRate,
} from '@base/utils'

describe('Utils', () => {
  const prices = [
    [12040, '$ 12.040,00'],
    [111020, '$ 111.020,00'],
    [4759, '$ 4.759,00'],
    [38710, '$ 38.710,00'],
  ]
  test.each(prices)('given %p as arguments, returns %p', (firstArg, expectedResult) => {
    const result = getPriceFormatted(+firstArg)
    expect(result).toEqual(expectedResult)
  })

  it('checkIfProductExistInFavorite', () => {
    const mockProducts = [
      {
        id: '1',
      },
      {
        id: '2',
      },
    ]

    const existProduct = checkIfProductExistInFavorite(mockProducts, '1')
    expect(existProduct).toBe(true)

    const notExistProduct = checkIfProductExistInFavorite(mockProducts, '3')
    expect(notExistProduct).toBe(false)
  })

  it('getRandomColor', () => {
    global.Math.random = () => 0.5
    const randomColor = getRandomColor()
    expect(randomColor).toBe('hsl(180,100%,50%)')
  })

  it('getDiscountedPrice', () => {
    const highPrice = 1000
    const lowPrice = 700
    const discountedPrice = getDiscountedPrice(highPrice, lowPrice)
    expect(discountedPrice).toBe(30)
  })

  const rates = [
    [3.4, ['full', 'full', 'full', 'half', 'empty']],
    [2.6, ['full', 'full', 'half', 'empty', 'empty']],
    [1, ['full', 'empty', 'empty', 'empty', 'empty']],
    [5, ['full', 'full', 'full', 'full', 'full']],
  ]
  test.each(rates)('given %p as arguments, returns %p', (firstArg, expectedResult) => {
    const result = getStarsToRate(Number(firstArg))
    expect(result).toEqual(expectedResult)
  })
})
