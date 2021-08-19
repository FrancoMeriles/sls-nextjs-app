import { Progress, Box, Text, Flex, Divider, HStack } from '@chakra-ui/react'

// Components
import RatedStar from '@base/components/RatedStar'

const ReviewProductHeader = ({ ratingAverage, sumRatingsOpinions, ratingLevels }) => {
  return (
    <>
      <Divider orientation="horizontal" />
      <Text fontSize="2xl" m="20px 0">
        Opiniones sobre el producto
      </Text>
      <Flex alignItems="center" pb={10} pt={5} flexWrap="wrap">
        <Box textAlign={{ sm: 'left', md: 'right' }} flex="1" p={5}>
          <Text fontSize="5xl">{ratingAverage}</Text>
          <RatedStar rateAverage={ratingAverage} boxSize={6} />
          <Text mt={4} fontSize="sm" color="gray.500" fontWeight="200">
            Promedio entre {sumRatingsOpinions} opiniones
          </Text>
        </Box>
        <Box flex="2" p={5}>
          {Object.values(ratingLevels)
            .reverse()
            .map((rating: number, i) => {
              const percentage = Math.floor((rating * 100) / +sumRatingsOpinions)
              return (
                <HStack key={i} spacing={3} alignItems="center" mt={2}>
                  <Text fontSize="sm" color="gray.500" fontWeight="200" width="80px">
                    {5 - i} estrellas
                  </Text>
                  <Box width="150px">
                    <Progress colorScheme="brand" size="xs" value={percentage} />
                  </Box>
                  <Text fontSize="sm" color="gray.500" fontWeight="200" width="50px">
                    {rating}
                  </Text>
                </HStack>
              )
            })}
        </Box>
      </Flex>
    </>
  )
}

export default ReviewProductHeader
