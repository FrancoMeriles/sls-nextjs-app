import { FC } from 'react'
import { Box, Text, Stat, StatNumber, Tag } from '@chakra-ui/react'

// Utils
import { getPriceFormatted, getDiscountedPrice } from '@base/utils'

interface ContentPriceProps {
  original_price: number
  price: number
}

const ContentPrice: FC<ContentPriceProps> = ({ original_price, price }) => {
  return (
    <>
      <Text as="del" fontSize="sm" color="gray.500" mt={3} d="block">
        {original_price && <p>{getPriceFormatted(original_price)}</p>}
      </Text>
      <Stat lineHeight="9">
        <Box display="flex">
          <StatNumber fontSize="3xl">{getPriceFormatted(price)}</StatNumber>
          {original_price && (
            <Tag size="sm" bg="transparent" color="brand.200">
              {getDiscountedPrice(original_price, price)} %OFF
            </Tag>
          )}
        </Box>
      </Stat>
    </>
  )
}

export default ContentPrice
