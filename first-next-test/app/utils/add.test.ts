import { add } from "./add";

test("Test functions that import server-only", () => {
  expect(add(1, 2)).toBe(3);
  // An assertion test returns a pass or fail; it will return a pass when a function's output returns an expected value.
});
