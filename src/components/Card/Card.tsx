import { FC } from 'react'
import { LinkBox, LinkOverlay, Image, Box, Text, Stat, StatNumber, Tag } from '@chakra-ui/react'
import NextLink from 'next/link'

import { getPriceFormatted, getPriceRound, checkIfProductExistInFavorite } from '@base/utils'
import { addFavorite, removeFavorite } from '@base/contexts/actions/favorites'
import { useDispatchFavorite, useFavorite } from '@base/contexts/Favorite'
import { HeartFull, HeartOutline } from '@base/icons'

interface ShippingInterface {
  free_shipping: boolean
}

interface ProductInterface {
  id: string
  title: string
  thumbnail: string
  price: number
  shipping: ShippingInterface
  original_price?: number
}
interface ProductProps {
  product: ProductInterface
}

const Card: FC<ProductProps> = ({ product }) => {
  const { id, title, thumbnail, price, shipping, original_price } = product
  const favorites = useFavorite()
  const dispatch = useDispatchFavorite()

  const iconHeartStyles = {
    boxSize: '5',
    pos: 'absolute',
    top: '5',
    right: '5',
    opacity: '0',
    color: 'brand.300',
    transition: 'opacity 0.4s ease',
    zIndex: '99999',
    _groupHover: { opacity: '1' },
    cursor: 'pointer',
  }

  return (
    <LinkBox bg="white" borderRadius={5} boxShadow="md" role="group" height="100%">
      {checkIfProductExistInFavorite(favorites, id) ? (
        <HeartFull {...iconHeartStyles} onClick={() => dispatch(removeFavorite(id))} />
      ) : (
        <HeartOutline {...iconHeartStyles} onClick={() => dispatch(addFavorite(product))} />
      )}

      <NextLink href={`/product/${id}`} passHref>
        <LinkOverlay>
          <Box p={5} borderBottom="1px" borderBottomColor="gray.200">
            <Image src={thumbnail} boxSize="240px" objectFit="cover" m="auto" />
          </Box>
          <Box p={5}>
            <Stat>
              <Box display="flex">
                <StatNumber fontSize="xl">{getPriceFormatted(price)}</StatNumber>
                {original_price && (
                  <Tag size="sm" bg="transparent" color="brand.200">
                    {getPriceRound(original_price, price)} %OFF
                  </Tag>
                )}
              </Box>
            </Stat>
            <Text fontSize="sm" noOfLines={2} mt={2}>
              {title}
            </Text>
            <Text fontSize="xs" noOfLines={2} mt={3} color="brand.200">
              {shipping.free_shipping && 'Envío gratis'}
            </Text>
          </Box>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  )
}

export default Card
