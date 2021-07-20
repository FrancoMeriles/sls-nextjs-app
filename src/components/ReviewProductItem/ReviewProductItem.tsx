import { Box, Text, Flex } from '@chakra-ui/react'
import { Thumbs } from '@base/icons'
import RatedStar from '@base/components/RatedStar'

const ReviewProductItem = ({ review }) => {
  return (
    <Box mt={4} mb={6}>
      <RatedStar rateAverage={review.rate} boxSize={4} />
      <Text fontSize="sm" fontWeight="semibold" mt={3} mb={3}>
        {review.title}
      </Text>
      <Text fontSize="sm">{review.content}</Text>
      <Flex alignItems="center" mt={4}>
        <Thumbs mr={2} mt={1} /> <Text fontSize="sm">{review.likes}</Text>
        <Thumbs transform="rotate(180deg)" mr={2} mt={1} ml={5} />
        <Text fontSize="sm">{review.dislikes}</Text>
      </Flex>
    </Box>
  )
}

export default ReviewProductItem