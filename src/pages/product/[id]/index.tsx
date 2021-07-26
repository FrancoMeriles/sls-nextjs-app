// General
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Container, Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import ImageGallery from 'react-image-gallery'

// Components
import ContentHeaderSubtitle from '@base/components/ContentHeaderSubtitle'
import ContentPrice from '@base/components/ContentPrice'
import RatedProduct from '@base/components/RatedProduct'
import ContentOptions from '@base/components/ContentOptions'
import ContentShippingOptions from '@base/components/ContentShippingOptions'
import ReviewProduct from '@base/components/ReviewProduct'
import ProductFeatures from '@base/components/ProductFeatures'
import ProductDescription from '@base/components/ProductDescription'
import ProductActions from '@base/components/ProductActions'

// Context
import { useZipCode } from '@base/contexts/ZipCode'

// Serivces
import LocalApi from '@base/service/local.service'

const Index = ({
  product,
  productRated,
  productDescription,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    id,
    title,
    condition,
    sold_quantity,
    original_price,
    price,
    warranty,
    accepts_mercadopago,
    pictures,
    attributes: productAttributes,
  } = product
  const { rating_average, rating_levels, reviews } = productRated
  const zipCode = useZipCode()
  const [shippingOptions, setShippingOptions] = useState(null)
  useEffect(() => {
    const localApi = new LocalApi()
    const getShippingOptionsByZipCode = async () => {
      const shippingOptions = await localApi.getShippingOptionsByProductIdAndZipCode(
        String(id),
        zipCode
      )
      setShippingOptions(shippingOptions)
    }
    getShippingOptionsByZipCode()
  }, [zipCode, id])

  const images = pictures.map((picture) => ({
    original: picture.url,
    thumbnail: picture.url,
  }))
  const sumRatingsOpinions = +Object.values(rating_levels).reduce(
    (a: number, b: number) => a + b,
    0
  )
  return (
    <>
      <Head>
        <title>Mercado Libre - {title}</title>
      </Head>
      <Container pt={4} pb={4}>
        <Box bg="white" p={4} borderRadius="5px">
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={[3, 3, 3, 2]}>
              <ImageGallery
                items={images}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
                thumbnailPosition={'left'}
              />
              <Box p={{ sm: 3, md: 10 }} mt={10}>
                <ProductFeatures attributes={productAttributes} />
              </Box>
              <Box p={{ sm: 3, md: 10 }}>
                <ProductDescription productDescription={productDescription} />
              </Box>
              <Box p={{ sm: 3, md: 10 }}>
                <ReviewProduct
                  allReviews={reviews}
                  ratingAverage={rating_average}
                  sumRatingsOpinions={sumRatingsOpinions}
                  ratingLevels={rating_levels}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={[3, 3, 3, 1]}>
              <Box pos="sticky" top={5} borderRadius="8px" border="solid 1px #0000001a" p={5}>
                <ContentHeaderSubtitle condition={condition} sold_quantity={sold_quantity} />
                <Heading as="h1" size="md" mt={4}>
                  {title}
                </Heading>
                <RatedProduct
                  ratingAverage={rating_average}
                  sumRatingsOpinions={sumRatingsOpinions}
                />
                <ContentPrice original_price={original_price} price={price} />
                {shippingOptions ? (
                  <ContentShippingOptions options={shippingOptions.options} />
                ) : null}
                <ProductActions product={product} />
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
