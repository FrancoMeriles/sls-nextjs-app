import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'
import { useDisclosure } from '@chakra-ui/react'

jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react')
  return {
    __esModule: true,
    ...originalModule,
    useDisclosure: jest.fn(),
  }
})

const useDisclosureMock = useDisclosure as jest.Mock

const mockDialogSearchOnOpen = jest.fn()
const mockDialogSearchOnClose = jest.fn()
const mockDialogSearchIsOpen = false

useDisclosureMock.mockImplementation(() => ({
  onOpen: mockDialogSearchOnOpen,
  isOpen: mockDialogSearchIsOpen,
  onClose: mockDialogSearchOnClose,
}))

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

  it('should open dialog', async () => {
    render(<Header />)
    userEvent.click(screen.getByTestId('show-search'))
    expect(mockDialogSearchOnOpen).toHaveBeenCalled()
  })

  // it('should execute close dialog', async () => {
  //   const mockDialogSearchOnOpen = jest.fn()
  //   const mockDialogSearchOnClose = jest.fn()
  //   const mockDialogSearchIsOpen = true

  //   useDisclosureMock.mockImplementation(() => ({
  //     onOpen: mockDialogSearchOnOpen,
  //     isOpen: mockDialogSearchIsOpen,
  //     onClose: mockDialogSearchOnClose,
  //   }))
  //   render(<Header />)
  //   userEvent.click(screen.getByTestId('show-search'))
  //   expect(mockDialogSearchOnOpen).toHaveBeenCalled()
  // })
})
