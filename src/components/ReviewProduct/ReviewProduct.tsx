import { FC } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

// Components
import ReviewProductItem from '@base/components/ReviewProductItem'
import ReviewProductHeader from '@base/components/ReviewProductHeader'

interface ReviewProductProps {
  allReviews: ReviewInterface[]
  ratingAverage: number
  sumRatingsOpinions: number
  ratingLevels: RatingLevelsInterface
}

interface ReviewInterface {
  id: number
  rate: number
  title: string
  content: string
  likes: number
  dislikes: number
}

interface RatingLevelsInterface {
  five_star: number
  four_star: number
  one_star: number
  three_star: number
  two_star: number
}

const ReviewProduct: FC<ReviewProductProps> = ({
  allReviews,
  ratingAverage,
  sumRatingsOpinions,
  ratingLevels,
}) => {
  const positiveReviews = allReviews.filter((review: ReviewInterface) => review.rate > 3)
  const negativeReviews = allReviews.filter((review: ReviewInterface) => review.rate < 3)
  return ratingAverage ? (
    <>
      <ReviewProductHeader
        ratingAverage={ratingAverage}
        sumRatingsOpinions={sumRatingsOpinions}
        ratingLevels={ratingLevels}
      />
      <Tabs isFitted colorScheme="brand">
        <TabList>
          <Tab>Todas</Tab>
          <Tab>Positivas</Tab>
          <Tab>Negativas</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            {allReviews.map((review: ReviewInterface) => (
              <ReviewProductItem review={review} key={review.id} />
            ))}
          </TabPanel>
          <TabPanel p={0}>
            {positiveReviews.map((review: ReviewInterface) => (
              <ReviewProductItem review={review} key={review.id} />
            ))}
          </TabPanel>
          <TabPanel p={0}>
            {negativeReviews.map((review: ReviewInterface) => (
              <ReviewProductItem review={review} key={review.id} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  ) : null
}

export default ReviewProduct
