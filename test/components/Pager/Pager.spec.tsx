import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import Pager from '@base/components/Pager'

const mockPushRouter = jest.fn()
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPushRouter,
    query: {
      page: 1,
      id: '__QUERY_ID__',
    },
  }),
}))

describe('Pager', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<Pager url="__SOME_URL__" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display two buttons', async () => {
    render(<Pager url="__SOME_URL__" />)
    expect(screen.getByText('Anterior')).toBeInTheDocument()
    expect(screen.getByText('Siguiente')).toBeInTheDocument()
  })

  it('should execute pager forward', async () => {
    render(<Pager url="__SOME_URL__" />)
    userEvent.click(screen.getByText('Siguiente'))
    expect(mockPushRouter).toHaveBeenCalledWith({
      pathname: '__SOME_URL__',
      query: { page: 2 },
    })
  })

  it('should not execute pager backward', async () => {
    render(<Pager url="__SOME_URL__" />)
    userEvent.click(screen.getByText('Anterior'))
    expect(mockPushRouter).not.toHaveBeenCalled()
  })
})
