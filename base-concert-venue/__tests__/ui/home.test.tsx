import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";


// testing that page has the correct heading and image

test('page has correct heading and image', () => {
  render(<Home />);
  // rendering the home page
  const heading = screen.getByRole("heading", { name: "Welcome to Popular Concert Venue", });
  // finBy when we await and getBy - when it is there already. The page is static, has no asynchronicity
  // Name - is what indentifies the element. In this case - just the text
  expect(heading).toBeInTheDocument();
  const image = screen.getByRole("img", { name: "Concert goer with hands in the shape of a heart" });
  expect(image).toBeInTheDocument();
});
// we can use it instead of test