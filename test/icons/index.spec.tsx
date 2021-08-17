import renderer from 'react-test-renderer'

import * as Icons from '@base/icons'

describe('Icons', () => {
  it('should render and match snapshot with required props', () => {
    const icons = Object.keys(Icons)
    icons.forEach((icon) => {
      const Icon = Icons[icon]
      const tree = renderer.create(<Icon />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
