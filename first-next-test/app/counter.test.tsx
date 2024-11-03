/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';
import Counter, { Checkbox } from './counter';

it('App Router: Works with Client Components (React State)', () => {
	render(<Counter />);
	expect(screen.getByRole('heading')).toHaveTextContent('0');
	fireEvent.click(screen.getByRole('button'));
	expect(screen.getByRole('heading')).toHaveTextContent('1');
});

// OR

test('Selecting checkbox should change value true', () => {
	const { getByLabelText } = render(<Checkbox />);
	const checkbox = getByLabelText(/not checked/i) as HTMLInputElement;
	fireEvent.click(checkbox);
	// fire event dispatches the click event to ensure the value changes
	expect(checkbox.checked).toEqual(true);
});
