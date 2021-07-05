import Head from 'next/head'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import LocalApi from '@base/service/local.service'

import { Container } from '@chakra-ui/react'

const App = ({ categorie }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Mercado Libre - Categories</title>
      </Head>
      <Container maxW="container.lg">
        <h1>{categorie.name}</h1>
        <p>
          <code>{categorie.id}</code>
        </p>
        {categorie.products.map((product) => {
          return <div key={product.id}>{product.title}</div>
        })}
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const localApi = new LocalApi()
  const categorieId = context.params.id
  const categorie = await localApi.getCategoriePage(String(categorieId))
  return {
    props: {
      categorie,
    },
  }
}

export default App
