/* eslint-disable prettier/prettier */
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line prettier/prettier
import { UserReservations } from '@/components/user/UserReservations';

// test("purchase button renders correct text", async () => {
//   render(<UserReservations userId={1} />);
//   const btnText = await screen.findByText(/Purchase more tickets/i);
//   expect(btnText).toBeInTheDocument();
// });

test("Displays reservations and 'purchase more' button when reservations exist", async () => {
	render(<UserReservations userId={1} />);
	const purchaseButton = await screen.findByRole('button', {
		name: /purchase more tickets/i,
	});
	expect(purchaseButton).toBeInTheDocument();
});
