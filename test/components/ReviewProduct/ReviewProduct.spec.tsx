import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import ReviewProduct from '@base/components/ReviewProduct'

const allReviews = [
  {
    id: 123456,
    rate: 4,
    title: '__TITLE_ONE__',
    content: '__CONTENT_ONE__',
    likes: 3,
    dislikes: 1,
  },
  {
    id: 1234567,
    rate: 3,
    title: '__TITLE_TWO__',
    content: '__CONTENT_TWO__',
    likes: 12,
    dislikes: 6,
  },
  {
    id: 12345678,
    rate: 1,
    title: '__TITLE_THREE__',
    content: '__CONTENT_THREE__',
    likes: 2,
    dislikes: 4,
  },
]

const ratingAverage = 3.8
const sumRatingsOpinions = 4
const ratingLevels = {
  five_star: 5,
  four_star: 3,
  one_star: 9,
  three_star: 7,
  two_star: 0,
}

describe('ReviewProduct', () => {
  it.skip('should render and match snapshot with required props', () => {
    const tree = renderer
      .create(
        <ReviewProduct
          allReviews={allReviews}
          ratingAverage={ratingAverage}
          sumRatingsOpinions={sumRatingsOpinions}
          ratingLevels={ratingLevels}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    render(
      <ReviewProduct
        allReviews={allReviews}
        ratingAverage={ratingAverage}
        sumRatingsOpinions={sumRatingsOpinions}
        ratingLevels={ratingLevels}
      />
    )
    expect(screen.getByText('Todas')).toBeInTheDocument()
    expect(screen.getByText('Positivas')).toBeInTheDocument()
    expect(screen.getByText('Negativas')).toBeInTheDocument()
  })
})
