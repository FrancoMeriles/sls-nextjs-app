import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import DevolutionsShippingOptions from '@base/components/ContentShippingOptions/DevolutionsShippingOptions'
import { useDisclosure } from '@chakra-ui/react'

jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react')
  return {
    __esModule: true,
    ...originalModule,
    useDisclosure: jest.fn(),
  }
})

const mockModalDevolutiongOnOpen = jest.fn()
const mockModalDevolutiongIsOpen = false
const mockModalDevolutiongOnClose = jest.fn()

const useDisclosureMock = useDisclosure as jest.Mock

useDisclosureMock.mockImplementation(() => ({
  onOpen: mockModalDevolutiongOnOpen,
  isOpen: mockModalDevolutiongIsOpen,
  onClose: mockModalDevolutiongOnClose,
}))

describe('DevolutionShippingOptions', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<DevolutionsShippingOptions />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and execute open model when user click the button', async () => {
    render(<DevolutionsShippingOptions />)
    expect(screen.getByText('Devolución gratis')).toBeInTheDocument()
    expect(screen.getByText('Tenés 30 días desde que lo recibís.')).toBeInTheDocument()

    userEvent.click(screen.getByText('Conocer más'))
    expect(mockModalDevolutiongOnOpen).toHaveBeenCalled()
  })
})
