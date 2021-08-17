import { render, screen } from '@testing-library/react'
import Card from '@base/components/Card'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'
import { addFavorite, removeFavorite } from '@base/contexts/actions/favorites'
import { useFavorite } from '@base/contexts/Favorite'

const mockDispatchFavorite = jest.fn()

jest.mock('@base/contexts/Favorite', () => ({
  useFavorite: jest.fn(),
  useDispatchFavorite: jest.fn(() => mockDispatchFavorite),
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
  id: '123',
  title: '__TITLE__',
  thumbnail: '__IMAGE_SRC__',
  price: 900,
  shipping: {
    free_shipping: true,
  },
  original_price: 1000,
}

const UseFavoriteMock = useFavorite as jest.Mock

describe('Card', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render and match snapshot with required props', () => {
    UseFavoriteMock.mockImplementation(() => [])
    const tree = renderer.create(<Card product={mockCardProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders, display the correct data and add a favorite', async () => {
    UseFavoriteMock.mockImplementation(() => [])
    const { container } = render(<Card product={mockCardProps} />)
    expect(screen.getByText(mockCardProps.title)).toBeInTheDocument()
    expect(screen.getByText('Envío gratis')).toBeInTheDocument()
    userEvent.click(container.querySelector('.chakra-icon'))
    expect(mockDispatchFavorite).toHaveBeenLastCalledWith(addFavorite(mockCardProps))
  })

  it('should renders, display the correct data and remove a favorite', async () => {
    UseFavoriteMock.mockImplementation(() => [{ id: '123' }])
    const { container } = render(<Card product={mockCardProps} />)
    userEvent.click(container.querySelector('.chakra-icon'))
    expect(mockDispatchFavorite).toHaveBeenLastCalledWith(removeFavorite('123'))
  })
})
