import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import ProductActions from '@base/components/ProductActions'
import { checkIfProductExistInFavorite } from '@base/utils'
import { addFavorite, removeFavorite } from '@base/contexts/actions/favorites'

const mockUseDispatchFavorite = jest.fn()

jest.mock('@base/utils', () => ({ checkIfProductExistInFavorite: jest.fn() }))
jest.mock('@base/contexts/Favorite', () => ({
  useDispatchFavorite: () => mockUseDispatchFavorite,
  useFavorite: jest.fn(),
}))

const CheckIfProductExistInFavoriteMock = checkIfProductExistInFavorite as jest.Mock

const product = {
  available_quantity: 600,
  id: '__ID__',
}

describe('ProductActions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render and match snapshot with required props', () => {
    CheckIfProductExistInFavoriteMock.mockImplementation(() => true)
    const tree = renderer.create(<ProductActions product={product} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders "Agregar a favoritos" if checkIfProductExistInFavorite return false', async () => {
    CheckIfProductExistInFavoriteMock.mockImplementation(() => false)

    render(<ProductActions product={product} />)
    expect(screen.getByText('Agregar a favoritos')).toBeInTheDocument()
    userEvent.click(screen.getByText('Agregar a favoritos'))
    expect(mockUseDispatchFavorite).toHaveBeenCalled()
    expect(mockUseDispatchFavorite).toHaveBeenCalledWith(addFavorite(product))
  })

  it('should renders "Eliminar de favoritos" if checkIfProductExistInFavorite return true', async () => {
    CheckIfProductExistInFavoriteMock.mockImplementation(() => true)

    render(<ProductActions product={product} />)
    expect(screen.getByText('Eliminar de favoritos')).toBeInTheDocument()
    userEvent.click(screen.getByText('Eliminar de favoritos'))
    expect(mockUseDispatchFavorite).toHaveBeenCalled()
    expect(mockUseDispatchFavorite).toHaveBeenCalledWith(removeFavorite(product.id))
  })
})
