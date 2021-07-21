import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ReviewProductItem from '@base/components/ReviewProductItem'
import ReviewProductHeader from '@base/components/ReviewProductHeader'

const ReviewProduct = ({ allReviews, ratingAverage, sumRatingsOpinions, ratingLevels }) => {
  const positiveReviews = allReviews.filter((review) => review.rate > 3)
  const negativeReviews = allReviews.filter((review) => review.rate < 3)
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
            {allReviews.map((review) => (
              <ReviewProductItem review={review} key={review.id} />
            ))}
          </TabPanel>
          <TabPanel p={0}>
            {positiveReviews.map((review) => (
              <ReviewProductItem review={review} key={review.id} />
            ))}
          </TabPanel>
          <TabPanel p={0}>
            {negativeReviews.map((review) => (
              <ReviewProductItem review={review} key={review.id} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  ) : null
}

export default ReviewProduct
