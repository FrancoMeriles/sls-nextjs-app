import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import Header from '@base/components/Header'

const mockPushRouter = jest.fn()

jest.mock('@base/contexts/Favorite', () => ({
  useFavorite: () => [],
}))

jest.mock('@base/components/ZipCode', () => () => <div />)

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPushRouter,
  }),
}))
describe('Header', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should redirect to favorite when user click on favorite icon', async () => {
    render(<Header />)
    userEvent.click(screen.getByTestId('go-to-favorite'))
    expect(mockPushRouter).toHaveBeenCalled()
    expect(mockPushRouter).toHaveBeenCalledWith('/favorites')
  })
})
