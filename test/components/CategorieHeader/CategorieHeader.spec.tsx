import { render, screen } from '@testing-library/react'
import CategorieHeader from '@base/components/CategorieHeader'
import renderer from 'react-test-renderer'

const mockCategorieHeaderProps = {
  picture: '__IMAGE_URL__',
  name: '__NAME__',
}

describe('CategorieHeader', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<CategorieHeader {...mockCategorieHeaderProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    render(<CategorieHeader {...mockCategorieHeaderProps} />)
    expect(screen.getByText(mockCategorieHeaderProps.name)).toBeInTheDocument()
  })
})
