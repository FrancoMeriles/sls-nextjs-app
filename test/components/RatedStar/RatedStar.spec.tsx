import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import RatedStar from '@base/components/RatedStar'

let ratingAverage = 3.8
const boxSize = 2

describe('RatedStar', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer
      .create(<RatedStar rateAverage={ratingAverage} boxSize={boxSize} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    const { container } = render(<RatedStar rateAverage={ratingAverage} boxSize={boxSize} />)
    expect(container.getElementsByClassName('chakra-icon').length).toBe(5)
  })

  it('should not renders if there is not ratingAverage', async () => {
    ratingAverage = 0
    const { container } = render(<RatedStar rateAverage={ratingAverage} boxSize={boxSize} />)
    expect(container.getElementsByClassName('chakra-icon').length).toBe(0)
  })
})
