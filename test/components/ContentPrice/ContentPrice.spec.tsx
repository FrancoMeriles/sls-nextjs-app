import { render, screen } from '@testing-library/react'
import { getPriceFormatted, getDiscountedPrice } from '@base/utils'

import ContentPrice from '@base/components/ContentPrice'
import renderer from 'react-test-renderer'

const mockContentPriceProps = {
  original_price: 1000,
  price: 900,
}

describe('ContentPrice', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<ContentPrice {...mockContentPriceProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data if the price has discount', async () => {
    render(<ContentPrice {...mockContentPriceProps} />)
    expect(
      screen.getByText(getPriceFormatted(mockContentPriceProps.original_price))
    ).toBeInTheDocument()
    expect(screen.getByText(getPriceFormatted(mockContentPriceProps.price))).toBeInTheDocument()
    expect(
      screen.getByText(
        `${getDiscountedPrice(
          mockContentPriceProps.original_price,
          mockContentPriceProps.price
        )} %OFF`
      )
    ).toBeInTheDocument()
  })

  it('should renders and display the correct data if the price doesnt have discount', async () => {
    mockContentPriceProps.original_price = 0
    render(<ContentPrice {...mockContentPriceProps} />)
    expect(screen.getByText(getPriceFormatted(mockContentPriceProps.price))).toBeInTheDocument()
    expect(screen.queryByText(`%OFF`)).not.toBeInTheDocument()
  })
})
