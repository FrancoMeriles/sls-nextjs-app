import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';
import "@base/service/local.service"

jest.mock('@base/service/local.service', () => jest.fn(() => ({
  getCategories: () => [{id: 1, name: 'test'}, {id: 2, name: 'another'}],
})));
describe('Blog page', () => {
  it('page renders and matches snapshot', async () => {
    const { serverRenderToString } = await getPage({
      route: '/',
      useDocument: true,
    });
    const { html } = serverRenderToString();
    expect(html).toMatchSnapshot();
  });
  it('renders blog page', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();
    expect(screen.getByText('Welcome to')).toBeInTheDocument();
  });
});