import { render, screen } from '@testing-library/react'
import Card from '@base/components/Card'
import renderer from 'react-test-renderer'

jest.mock('@base/contexts/Favorite', () => ({
  useFavorite: () => [],
  useDispatchFavorite: jest.fn(),
}))

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: '__QUERY__',
  }),
}))

jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children
)

const mockCardProps = {
  id: '__ID__',
  title: '__TITLE__',
  thumbnail: '__IMAGE_SRC__',
  price: 900,
  shipping: {
    free_shipping: true,
  },
  original_price: 1000,
}

describe('Card', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<Card product={mockCardProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    render(<Card product={mockCardProps} />)
    expect(screen.getByText(mockCardProps.title)).toBeInTheDocument()
    expect(screen.getByText('Envío gratis')).toBeInTheDocument()
  })
})
