import { render, screen } from '@testing-library/react'
import ContentOptions from '@base/components/ContentOptions'
import renderer from 'react-test-renderer'

const mockContentOptionsProps = {
  warranty: '__WARRANTY__',
  accepts_mercadopago: true,
}

describe('ContentOptions', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<ContentOptions {...mockContentOptionsProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data if accept mercado pago', async () => {
    mockContentOptionsProps.accepts_mercadopago = true

    render(<ContentOptions {...mockContentOptionsProps} />)
    expect(screen.getByText(mockContentOptionsProps.warranty)).toBeInTheDocument()
    expect(screen.getByText('Compra Protegida')).toBeInTheDocument()
  })

  it('should renders and display the correct data if dont accept mercado pago"', async () => {
    mockContentOptionsProps.accepts_mercadopago = false
    render(<ContentOptions {...mockContentOptionsProps} />)

    expect(screen.getByText(mockContentOptionsProps.warranty)).toBeInTheDocument()
    expect(screen.queryByText('Compra Protegida')).not.toBeInTheDocument()
  })
})
