import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

test("reservation page shows the correct number of available seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);
  const seatCountText = await screen.findByText(/10 seats left/i);
  // the number 10 comes from our fake data!
  expect(seatCountText).toBeInTheDocument();
});
