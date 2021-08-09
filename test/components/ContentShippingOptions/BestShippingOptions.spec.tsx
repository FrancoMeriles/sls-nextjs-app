import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import BestShippingOption from '@base/components/ContentShippingOptions/BestShippingOption'
import { useDisclosure } from '@chakra-ui/react'

jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react')
  return {
    __esModule: true,
    ...originalModule,
    useDisclosure: jest.fn(),
  }
})

const mockModalBestShippingOnOpen = jest.fn()
const mockModalBestShippingIsOpen = false
const mockModalBestShippingOnClose = jest.fn()

const useDisclosureMock = useDisclosure as jest.Mock

useDisclosureMock.mockImplementation(() => ({
  onOpen: mockModalBestShippingOnOpen,
  isOpen: mockModalBestShippingIsOpen,
  onClose: mockModalBestShippingOnClose,
}))

const mockBestShippingOptionProps = {
  display: 'recommended',
  shipping_option_type: '__SHIPPING_OPTIONS_TYPE_RC__',
  name: '__NAME_RC__',
  cost: 500,
  base_cost: 600,
  estimated_delivery_time: {
    date: '2021-08-03T00:00:00-03:00',
  },
}

const mockAllwaysShippingOptionProps = {
  display: 'agency',
  shipping_option_type: 'agency',
  name: '__NAME_AG__',
  cost: 900,
  base_cost: 1000,
  estimated_delivery_time: {
    date: '2021-08-03T00:00:00-03:00',
  },
}

describe('BestShippingOptionOptions', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer
      .create(
        <BestShippingOption
          bestShippingOption={mockBestShippingOptionProps}
          allwaysShippingOption={mockAllwaysShippingOptionProps}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and execute open model when user click the button', async () => {
    render(
      <BestShippingOption
        bestShippingOption={mockBestShippingOptionProps}
        allwaysShippingOption={mockAllwaysShippingOptionProps}
      />
    )
    expect(screen.getByText('Beneficio Mercado Puntos')).toBeInTheDocument()
    userEvent.click(screen.getByText('Ver más formas de entrega'))
    expect(mockModalBestShippingOnOpen).toHaveBeenCalled()
  })
})
