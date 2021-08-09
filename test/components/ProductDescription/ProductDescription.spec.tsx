import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import ProductDescription from '@base/components/ProductDescription'

const productDescription = {
  plain_text: '__LOREM_IPSUM_DOLOR__',
}
describe('ProductDescription', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer
      .create(<ProductDescription productDescription={productDescription} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    render(<ProductDescription productDescription={productDescription} />)
    expect(screen.getByText('Descripción')).toBeInTheDocument()
    expect(screen.getByText(productDescription.plain_text)).toBeInTheDocument()
  })
})
