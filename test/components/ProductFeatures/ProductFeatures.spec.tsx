import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import ProductFeatures from '@base/components/ProductFeatures'

const attributes = [
  {
    id: '__ID_1__',
    name: '__NAME_1__',
    value_name: '__NAME_1__',
  },
  {
    id: '__ID_2__',
    name: '__NAME_2__',
    value_name: '__NAME_2__',
  },
]
describe('ProductFeatures', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<ProductFeatures attributes={attributes} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    render(<ProductFeatures attributes={attributes} />)
    expect(screen.getByText('Características del producto')).toBeInTheDocument()
    attributes.forEach((attribute) => {
      expect(screen.getByText(attribute.name)).toBeInTheDocument()
      expect(screen.getByText(attribute.value_name)).toBeInTheDocument()
    })
  })
})
