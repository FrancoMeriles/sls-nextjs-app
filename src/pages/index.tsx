import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Container, Grid } from '@chakra-ui/react'
import LocalApi from '@base/service/local.service'
import CategorieCard from '@base/components/CategorieCard'
import { CategorieType } from '@base/types'

const Index = ({ categories }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Mercado Libre - Home</title>
      </Head>
      <Container maxW="container.lg">
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={5} pt={5} pb={5}>
          {categories.map((categorie: CategorieType) => {
            return <CategorieCard name={categorie.name} id={categorie.id} key={categorie.id} />
          })}
        </Grid>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const localApi = new LocalApi()
  const categories = await localApi.getCategories()
  return {
    props: {
      categories,
    },
  }
}

export default Index
