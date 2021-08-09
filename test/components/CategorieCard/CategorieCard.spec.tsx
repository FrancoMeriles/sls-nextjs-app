import { render, screen } from '@testing-library/react'
import CategorieCard from '@base/components/CategorieCard'
import renderer from 'react-test-renderer'

jest.mock('@base/utils', () => ({
  getRandomColor: () => 'hsl(214,100%,50%)',
}))

const mockCategorieCardProps = {
  id: '__ID__',
  name: '__NAME__',
}

describe('CategorieCard', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<CategorieCard {...mockCategorieCardProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    render(<CategorieCard {...mockCategorieCardProps} />)
    expect(screen.getByText(mockCategorieCardProps.name)).toBeInTheDocument()
    expect(screen.getByText(mockCategorieCardProps.name).closest('a')).toHaveAttribute(
      'href',
      `/categorie/${mockCategorieCardProps.id}/products?page=1`
    )
  })
})
