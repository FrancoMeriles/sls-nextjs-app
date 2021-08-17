import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import { FavoriteProvider, useFavorite, useDispatchFavorite } from '@base/contexts/Favorite'
import { addFavorite, removeFavorite } from '@base/contexts/actions/favorites'

const DumbComponent = () => {
  const favorites = useFavorite()
  const dispatch = useDispatchFavorite()
  const productMock = { id: 1 }
  return (
    <div>
      {favorites.length}
      <button onClick={() => dispatch(addFavorite(productMock))}>Add to Favorite</button>
      <button onClick={() => dispatch(removeFavorite(1))}>Remove from Favorite</button>
      <button onClick={() => dispatch({ type: 'UNDEFINDED_ACTION' })}>
        Call for undefined action
      </button>
    </div>
  )
}

describe('Favorite Context', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
  it('should render and match snapshot with required children', () => {
    const tree = renderer
      .create(
        <FavoriteProvider>
          <div>__CHILDREN__</div>
        </FavoriteProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should add and remove a product favorite', () => {
    render(
      <FavoriteProvider>
        <DumbComponent />
      </FavoriteProvider>
    )
    expect(screen.getByText('0')).toBeInTheDocument()
    userEvent.click(screen.getByText('Add to Favorite'))
    expect(screen.getByText('1')).toBeInTheDocument()
    userEvent.click(screen.getByText('Remove from Favorite'))
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('should add and remove a product favorite in the store and in the localstorage', () => {
    const mockSetItem = jest.fn()
    Storage.prototype.setItem = mockSetItem
    const mockProduct = [{ id: 1 }]
    render(
      <FavoriteProvider>
        <DumbComponent />
      </FavoriteProvider>
    )
    expect(screen.getByText('0')).toBeInTheDocument()
    userEvent.click(screen.getByText('Add to Favorite'))
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(mockSetItem).toHaveBeenCalledWith('favoriteProducts', JSON.stringify(mockProduct))
    userEvent.click(screen.getByText('Remove from Favorite'))
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(mockSetItem).toHaveBeenCalledWith('favoriteProducts', JSON.stringify([]))
  })

  it('should detect favorites in the localstorage and save it in the store', () => {
    const mockProduct = [{ id: 1 }]
    const mockGetItem = jest.fn(() => JSON.stringify(mockProduct))
    Storage.prototype.getItem = mockGetItem
    render(
      <FavoriteProvider>
        <DumbComponent />
      </FavoriteProvider>
    )
    expect(mockGetItem).toHaveBeenCalledWith('favoriteProducts')
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('should detect favorites in the localstorage and save it in the store', () => {
    render(
      <FavoriteProvider>
        <DumbComponent />
      </FavoriteProvider>
    )
    userEvent.click(screen.getByText('Call for undefined action'))
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
