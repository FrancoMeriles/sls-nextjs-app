import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Container, Grid } from '@chakra-ui/react'
import LocalApi from '@base/service/local.service'
import Card from '@base/components/Card'
import Pager from '@base/components/Pager'

const Index = ({ results }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { q } = useRouter().query

  return (
    <>
      <Head>
        <title>Mercado Libre - {q}</title>
      </Head>
      <Container maxW="container.lg" paddingTop={5}>
        <Grid templateColumns="repeat(auto-fill, minmax(230px, 1fr))" gap={5} pt={5} pb={5}>
          {results.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </Grid>
        <Pager url={`/products`} />
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
      ...products,
    },
  }
}

export default Index
