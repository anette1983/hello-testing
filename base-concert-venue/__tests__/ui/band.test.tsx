import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandComponent from "@/pages/bands/[bandId]";

test("band component displays correct band information", async () => {
  // this func needs to be async, because we are reading files
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);
  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
  // in real life we can add tests:
  // the image, the description, the link to the photograper
});

test("band component displays an error if an error occurs", () => {
  render(<BandComponent band={null} error="Something went wrong!" />);
  const error = screen.getByRole("heading", { name: /Something went wrong/i });
  expect(error).toBeInTheDocument();
});
