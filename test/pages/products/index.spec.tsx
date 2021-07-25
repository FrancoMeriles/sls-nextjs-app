import { render, screen } from '@testing-library/react'
import Products from '@base/pages/products'
import renderer from 'react-test-renderer'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: '__QUERY__',
  }),
}))

jest.mock('@base/contexts/Favorite', () => ({
  useFavorite: () => [],
  useDispatchFavorite: jest.fn,
}))

const mockProducts = [
  {
    id: '__ID_1__',
    title: '__TITLE_1__',
    thumbnail: '__THUMBNAIL_1__',
    price: 12345,
    shipping: true,
    original_price: 1234,
  },
  {
    id: '__ID_2__',
    title: '__TITLE_2__',
    thumbnail: '__THUMBNAIL_3__',
    price: 12345,
    shipping: true,
    original_price: 1234,
  },
]

describe('Products', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<Products results={mockProducts} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should renders and display two products with the correct data', async () => {
    render(<Products results={mockProducts} />)
    expect(screen.getAllByRole('group')).toHaveLength(mockProducts.length)
    mockProducts.forEach((mockProduct) => {
      expect(screen.getByText(mockProduct.title)).toBeInTheDocument()
      expect(screen.getByText(mockProduct.title).closest('a')).toHaveAttribute(
        'href',
        `/product/${mockProduct.id}`
      )
    })
  })
})
