import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import ReviewProductItem from '@base/components/ReviewProductItem'

const review = {
  id: 123456,
  rate: 4,
  title: '__TITLE_ONE__',
  content: '__CONTENT_ONE__',
  likes: 3,
  dislikes: 1,
}

describe('ReviewProductItem', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<ReviewProductItem review={review} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    render(<ReviewProductItem review={review} />)
    expect(screen.getByText(review.title)).toBeInTheDocument()
    expect(screen.getByText(review.content)).toBeInTheDocument()
  })
})
