import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { getStarsToRate } from '@base/utils'
import { Star } from '@base/icons'

interface RatedStarProps {
  rateAverage: number
  boxSize: number
}

const RatedStar: FC<RatedStarProps> = ({ rateAverage, boxSize }) => {
  const rates = getStarsToRate(rateAverage)
  return (
    <Box>
      {rateAverage > 0 &&
        rates.map((rateToStar, index) => (
          <Star boxSize={boxSize} color="brand.300" key={index} paint={rateToStar} />
        ))}
    </Box>
  )
}

export default RatedStar
