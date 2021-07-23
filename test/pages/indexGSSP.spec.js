import '@base/service/local.service'
import { getServerSideProps } from '@base/pages'

const mockCategories = [
  { id: 1, name: '__FIRST_NAME__' },
  { id: 2, name: '__SECOND_NAME__' },
]

jest.mock('@base/service/local.service', () =>
  jest.fn(() => ({
    getCategories: () => mockCategories,
  }))
)

describe('getServerSideProps', () => {
  it('should call categories api', async () => {
    const response = await getServerSideProps()
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          categories: mockCategories,
        },
      })
    )
  })
})
