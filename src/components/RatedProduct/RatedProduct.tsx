import { Flex, Text } from '@chakra-ui/react'
import RatedStar from '../RatedStar'

const ProductRated = ({ rateAverage, sumRatingsOpinions }) => {
  return (
    <Flex alignItems="center" mt={3}>
      <RatedStar rateAverage={rateAverage} boxSize={4} />
      <Text fontSize="xs" color="gray.400" ml={2} pt={1}>
        {sumRatingsOpinions} Opiniones
      </Text>
    </Flex>
  )
}

export default ProductRated
