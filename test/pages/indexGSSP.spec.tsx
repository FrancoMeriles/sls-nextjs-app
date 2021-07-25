import '@base/service/local.service'
import { getServerSideProps } from '@base/pages'
import { GetServerSidePropsContext } from 'next'

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
    const context = {
      params: {},
    }
    const response = await getServerSideProps(context as GetServerSidePropsContext)
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          categories: mockCategories,
        },
      })
    )
  })
})
