import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import ContentShippingOptions from '@base/components/ContentShippingOptions'

const mockContentShippingOptionsProps = {
  options: [
    {
      display: 'recommended',
      shipping_option_type: '__SHIPPING_OPTIONS_TYPE_RC__',
      name: '__NAME_RC__',
      cost: 500,
      base_cost: 600,
      estimated_delivery_time: {
        date: '2021-08-03T00:00:00-03:00',
      },
    },
    {
      display: 'agency',
      shipping_option_type: 'agency',
      name: '__NAME_AG__',
      cost: 900,
      base_cost: 1000,
      estimated_delivery_time: {
        date: '2021-08-03T00:00:00-03:00',
      },
    },
  ],
}

describe('ContentShippingOptions', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer
      .create(<ContentShippingOptions {...mockContentShippingOptionsProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    render(<ContentShippingOptions {...mockContentShippingOptionsProps} />)
    expect(screen.getByText('Beneficio Mercado Puntos')).toBeInTheDocument()
  })
})
