import { render, screen } from '@testing-library/react'
import ContentHeaderSubtitle from '@base/components/ContentHeaderSubtitle'
import renderer from 'react-test-renderer'

const mockContentHeaderSubtitleProps = {
  condition: 'new',
  sold_quantity: 500,
}

describe('ContentHeaderSubtitle', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer
      .create(<ContentHeaderSubtitle {...mockContentHeaderSubtitleProps} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct condition if is "new"', async () => {
    mockContentHeaderSubtitleProps.sold_quantity = 300

    render(<ContentHeaderSubtitle {...mockContentHeaderSubtitleProps} />)
    expect(screen.getByText('Nuevo')).toBeInTheDocument()
    expect(screen.getByText('| 300 Vendidos')).toBeInTheDocument()
  })

  it('should renders and display the correct condition if is "used"', async () => {
    mockContentHeaderSubtitleProps.condition = 'use'
    mockContentHeaderSubtitleProps.sold_quantity = 400

    render(<ContentHeaderSubtitle {...mockContentHeaderSubtitleProps} />)
    expect(screen.getByText('Usado')).toBeInTheDocument()
    expect(screen.getByText('| 400 Vendidos')).toBeInTheDocument()
  })
})
