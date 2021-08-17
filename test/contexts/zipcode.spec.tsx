import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
// const { act } = renderer

import { ZipCodeProvider, useZipCode, useDispatchZipCode } from '@base/contexts/ZipCode'
import { setZipCode } from '@base/contexts/actions/zipCode'

const mockZipCode = {
  postal_code: 2000,
}

jest.mock(
  '@base/service/zipcode.service',
  () =>
    class MockZipCode {
      async getZipCode() {
        return Promise.resolve(mockZipCode)
      }
    }
)

const DumbComponent = () => {
  const zipcode = useZipCode()
  const dispatch = useDispatchZipCode()
  return (
    <div>
      {zipcode}
      <button onClick={() => dispatch(setZipCode(5500))}>Set ZipCode</button>
      <button onClick={() => dispatch({ type: 'UNDEFINDED_ACTION' })}>
        Call for undefined action
      </button>
    </div>
  )
}

describe('Favorite Context', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    jest.clearAllMocks()
  })
  it('should render and match snapshot with required children', async () => {
    const tree = renderer
      .create(
        <ZipCodeProvider>
          <div>__CHILDREN__</div>
        </ZipCodeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should set a zipcode', async () => {
    await act(async () =>
      render(
        <ZipCodeProvider>
          <DumbComponent />
        </ZipCodeProvider>
      )
    )
    expect(screen.getByText('2000')).toBeInTheDocument()
    userEvent.click(screen.getByText('Set ZipCode'))
    expect(screen.getByText('5500')).toBeInTheDocument()
  })

  it('should detect a zipcode in localstoraeset a zipcode', async () => {
    const mockGetItem = jest.fn(() => '2500')
    Storage.prototype.getItem = mockGetItem

    await act(async () =>
      render(
        <ZipCodeProvider>
          <DumbComponent />
        </ZipCodeProvider>
      )
    )
    expect(screen.getByText('2000')).toBeInTheDocument()
    userEvent.click(screen.getByText('Call for undefined action'))
    expect(screen.getByText('2000')).toBeInTheDocument()
  })
})
