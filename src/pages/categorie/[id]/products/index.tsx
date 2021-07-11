import React from 'react'
import Head from 'next/head'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import LocalApi from '@base/service/local.service'
import { Container, Grid } from '@chakra-ui/react'
import CategorieHeader from '@base/components/CategorieHeader'
import Card from '@base/components/Card'
import Pager from '@base/components/Paginator'

const Index = ({
  categorie,
  products,
  paging,
  categorieId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Mercado Libre - {categorie.name}</title>
      </Head>
      <Container maxW="container.lg" paddingTop={5}>
        <CategorieHeader name={categorie.name} picture={categorie.picture} />
        <Grid templateColumns="repeat(auto-fill, minmax(230px, 1fr))" gap={5} pt={5} pb={5}>
          {products.map((product) => {
            return <Card key={product.id} {...product} />
          })}
        </Grid>
        <Pager paging={paging} url={`/categorie/${categorieId}/products`} />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const localApi = new LocalApi()
  const categorieId = context.params.id
  const pageNumber = context.query.page || 1
  const productsByCategorie = await localApi.getProductsByCategorie(
    String(categorieId),
    Number(pageNumber)
  )
  return {
    props: { ...productsByCategorie, categorieId },
  }
}

export default Index
