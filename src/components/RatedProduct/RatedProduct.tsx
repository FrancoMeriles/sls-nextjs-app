import { Star } from '@base/icons'
import { Flex, Text } from '@chakra-ui/react'
import { getStarsToRate } from '@base/utils'

const ProductRated = ({ rateAverage, rateLevels }) => {
  const rates = getStarsToRate(rateAverage)
  const sumRatingsOpinions = Object.values(rateLevels).reduce((a: number, b: number) => a + b, 0)

  return (
    <Flex alignItems="center" mt={3}>
      {rateAverage > 0 && rates.map((rateToStar, index) => <Star key={index} paint={rateToStar} />)}
      <Text fontSize="xs" color="gray.400" ml={2} pt={1}>
        {sumRatingsOpinions} Opiniones
      </Text>
    </Flex>
  )
}

export default ProductRated
