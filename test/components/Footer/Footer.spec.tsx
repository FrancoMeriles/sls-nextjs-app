import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import Footer from '@base/components/Footer'

describe('Footer', () => {
  it('should render and match snapshot with required props', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders and display the correct data', async () => {
    render(<Footer />)
    expect(screen.getByText('Copyright © 1999-2021 MercadoLibre S.R.L.')).toBeInTheDocument()
  })
})
