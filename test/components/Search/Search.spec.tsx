import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import Search from '@base/components/Search'

const mockOnClose = jest.fn()
const onClose = mockOnClose

const mockPushRouter = jest.fn()

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPushRouter,
  }),
}))

describe('Search', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<Search onClose={onClose} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    const stringText = 'Hello!'
    const { container } = render(<Search onClose={onClose} />)
    userEvent.type(container.querySelector('.chakra-input'), stringText)
    userEvent.click(screen.getByRole('button'))
    expect(mockPushRouter).toHaveBeenCalledWith({
      pathname: '/products',
      query: { page: 1, q: stringText },
    })
    expect(mockOnClose).toHaveBeenCalled()
  })
})
