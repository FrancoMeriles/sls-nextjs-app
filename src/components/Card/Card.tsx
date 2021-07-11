import { LinkBox, LinkOverlay, Image, Box, Text, Stat, StatNumber, Tag } from '@chakra-ui/react'
import NextLink from 'next/link'

import { getPriceFormatted, getPriceRound } from '@base/utils'
import { HeartFull } from '@base/icons'

const CategorieCard = ({ id, title, thumbnail, price, shipping, original_price }) => {
  const handleAddFavorite = (id) => {
    console.log('clickeo', id)
  }
  return (
    <LinkBox bg="white" borderRadius={5} boxShadow="md" role="group">
      <HeartFull
        boxSize="5"
        pos="absolute"
        top="5"
        right="5"
        opacity="0"
        color="brand.300"
        transition="opacity 0.4s ease"
        zIndex="99999"
        _groupHover={{ opacity: '1' }}
        cursor="pointer"
        onClick={() => handleAddFavorite(id)}
      />
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

export default CategorieCard
