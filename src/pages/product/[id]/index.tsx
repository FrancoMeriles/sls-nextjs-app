// General
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Container, Box, Grid, GridItem, Heading, Button, Text } from '@chakra-ui/react'

// Components
import ContentHeaderSubtitle from '@base/components/ContentHeaderSubtitle'
import ContentPrice from '@base/components/ContentPrice'
import RatedProduct from '@base/components/RatedProduct'
import ContentOptions from '@base/components/ContentOptions'
import ContentShippingOptions from '@base/components/ContentShippingOptions'

// Serivces
import LocalApi from '@base/service/local.service'

const Index = ({
  title,
  condition,
  sold_quantity,
  original_price,
  price,
  available_quantity,
  rating_average,
  shippingOptions,
  rating_levels,
  warranty,
  accepts_mercadopago,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Mercado Libre - {title}</title>
      </Head>
      <Container pt={4} pb={4}>
        <Box bg="white" p={4} borderRadius="5px">
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={[3, 3, 3, 2]}>
              Aca van las imagenes
              <Box height="900px">asd</Box>
              <Box height="900px">asd</Box>
            </GridItem>
            <GridItem colSpan={[3, 3, 3, 1]}>
              <Box pos="sticky" top={5} borderRadius="8px" border="solid 1px #0000001a" p={5}>
                <ContentHeaderSubtitle condition={condition} sold_quantity={sold_quantity} />
                <Heading as="h1" size="md" mt={4}>
                  {title}
                </Heading>
                <RatedProduct rateAverage={rating_average} rateLevels={rating_levels} />
                <ContentPrice original_price={original_price} price={price} />
                <ContentShippingOptions shippingOptions={shippingOptions} />
                <Text fontSize="xs" color="black" fontWeight="semibold" mt={4}>
                  {available_quantity > 0 ? 'Stock disponible' : 'Sin stock'}
                </Text>
                <Button w="100%" size="lg" colorScheme="brand" mt={2}>
                  Comprar ahora
                </Button>
                <ContentOptions warranty={warranty} accepts_mercadopago={accepts_mercadopago} />
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const localApi = new LocalApi()
  const productId = context.params.id
  const product = await localApi.getProductById(String(productId))
  return {
    props: {
      ...product,
    },
  }
}

export default Index
