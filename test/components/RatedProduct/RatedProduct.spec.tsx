import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import RatedProduct from '@base/components/RatedProduct'

const ratingAverage = 3.8
const sumRatingsOpinions = 5

describe('RatedProduct', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer
      .create(
        <RatedProduct ratingAverage={ratingAverage} sumRatingsOpinions={sumRatingsOpinions} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    render(<RatedProduct ratingAverage={ratingAverage} sumRatingsOpinions={sumRatingsOpinions} />)
    expect(screen.getByText(`${sumRatingsOpinions} Opiniones`)).toBeInTheDocument()
  })
})
