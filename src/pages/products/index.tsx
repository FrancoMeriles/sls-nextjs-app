import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Container } from '@chakra-ui/react'
import LocalApi from '@base/service/local.service'

const Index = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Mercado Libre - Home</title>
      </Head>
      <Container maxW="container.lg">
        Hola
        {products.results.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const localApi = new LocalApi()
  const query = context.query.q
  const page = context.query.page
  const products = await localApi.getProductsByQuery(String(query), Number(page))
  return {
    props: {
      products,
    },
  }
}

export default Index
