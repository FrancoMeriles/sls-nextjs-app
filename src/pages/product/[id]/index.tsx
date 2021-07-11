import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Container } from '@chakra-ui/react'
import LocalApi from '@base/service/local.service'

const Index = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Mercado Libre - Home</title>
      </Head>
      <Container maxW="container.lg">Hola {product.title}</Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const localApi = new LocalApi()
  const productId = context.params.id
  const product = await localApi.getProductById(String(productId))
  return {
    props: {
      product,
    },
  }
}

export default Index
