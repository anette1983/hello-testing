/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Page from './page';

it('App Router: Works with Server Components', () => {
	// render(<Page />);
	// expect(screen.getByRole("heading")).toHaveTextContent("App Router");
	// OR
	const { getByText } = render(<Page />); //assertion tests, to determine whether specific web content is displayed on a webpage
	const h1 = getByText(/App Router/);
	expect(h1).toHaveTextContent('App Router');
});
