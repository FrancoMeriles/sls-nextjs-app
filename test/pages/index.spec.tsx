import { render, screen } from '@testing-library/react'
import App from '@base/pages'
import renderer from 'react-test-renderer'

jest.mock('@base/utils', () => ({
  getRandomColor: () => 'hsl(214,100%,50%)',
}))

const mockCategories = [
  { id: 1, name: '__FIRST_NAME__' },
  { id: 2, name: '__SECOND_NAME__' },
]

describe('App', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<App categories={mockCategories} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should renders and display two categories with the correct name and url', async () => {
    render(<App categories={mockCategories} />)
    mockCategories.forEach((mockCategorie) => {
      expect(screen.getByText(mockCategorie.name)).toBeInTheDocument()
      expect(screen.getByText(mockCategorie.name).closest('a')).toHaveAttribute(
        'href',
        `/categorie/${mockCategorie.id}/products?page=1`
      )
    })
  })
})
