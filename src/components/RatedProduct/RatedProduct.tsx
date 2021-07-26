import { FC } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import RatedStar from '../RatedStar'

interface ProductRatedProps {
  ratingAverage: number
  sumRatingsOpinions: number
}

const ProductRated: FC<ProductRatedProps> = ({ ratingAverage, sumRatingsOpinions }) => {
  return ratingAverage ? (
    <Flex alignItems="center" mt={3}>
      <RatedStar rateAverage={ratingAverage} boxSize={4} />
      <Text fontSize="xs" color="gray.400" ml={2} pt={1}>
        {sumRatingsOpinions} Opiniones
      </Text>
    </Flex>
  ) : null
}

export default ProductRated
