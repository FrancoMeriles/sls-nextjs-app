import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import ReviewProductHeader from '@base/components/ReviewProductHeader'

const ratingAverage = 3.8
const sumRatingsOpinions = 4
const ratingLevels = {
  five_star: 5,
  four_star: 3,
  one_star: 9,
  three_star: 7,
  two_star: 0,
}
describe('ReviewProductHeader', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer
      .create(
        <ReviewProductHeader
          ratingAverage={ratingAverage}
          sumRatingsOpinions={sumRatingsOpinions}
          ratingLevels={ratingLevels}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    const { container } = render(
      <ReviewProductHeader
        ratingAverage={ratingAverage}
        sumRatingsOpinions={sumRatingsOpinions}
        ratingLevels={ratingLevels}
      />
    )
    expect(screen.getByText('Opiniones sobre el producto')).toBeInTheDocument()
    expect(screen.getByText(`Promedio entre ${sumRatingsOpinions} opiniones`)).toBeInTheDocument()
    expect(container.getElementsByClassName('chakra-stack').length).toBe(5)
  })
})
