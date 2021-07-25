import '@base/service/local.service'
import { getServerSideProps } from '@base/pages/products'
import { GetServerSidePropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'

const mockProducts = [
  {
    id: '__ID_1__',
    title: '__TITLE_1__',
    thumbnail: '__THUMBNAIL_1__',
    price: 12345,
    shipping: true,
    original_price: 1234,
  },
  {
    id: '__ID_2__',
    title: '__TITLE_2__',
    thumbnail: '__THUMBNAIL_3__',
    price: 12345,
    shipping: true,
    original_price: 1234,
  },
]

const mockCategorie = {
  id: '__ID_CATEGORIE__',
  name: '__NAME_CATEGORIE',
  picture: '__PICTURE_CATEGORIE__',
}

jest.mock('@base/service/local.service', () =>
  jest.fn(() => ({
    getProductsByQuery: () => ({
      categorie: mockCategorie,
      products: mockProducts,
    }),
  }))
)

describe('getServerSideProps', () => {
  it('should call products api', async () => {
    const context = {
      query: {
        q: '__SOME_QUERY__',
        page: '__SOME_PAGE__',
      } as ParsedUrlQuery,
    }
    const response = await getServerSideProps(context as GetServerSidePropsContext)
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          categorie: mockCategorie,
          products: mockProducts,
        },
      })
    )
  })
})
