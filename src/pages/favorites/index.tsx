import Head from 'next/head'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import Card from '@base/components/Card'
import { useFavorite } from '@base/contexts/Favorite'

const Index = () => {
  const favorites = useFavorite()
  return (
    <>
      <Head>
        <title>Mercado Libre - Mis Favoritos</title>
      </Head>
      <Container maxW="container.lg" paddingTop={5}>
        <Grid templateColumns="repeat(auto-fill, minmax(230px, 1fr))" gap={5} pt={5} pb={5}>
          {favorites &&
            favorites.map((product) => (
              <GridItem colSpan={[4, 2, 2, 1]} key={product.id}>
                <Card product={product} />
              </GridItem>
            ))}
        </Grid>
      </Container>
    </>
  )
}

export default Index
