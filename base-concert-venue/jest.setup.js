// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// import { server } from "./mocks/server.js";
// our configuration does not allow this import syntax
import { server } from "./__tests__/__mocks__/msw/server";
// establish api mocking before all tests
beforeAll(() => server.listen());

// reset any request handlers that we may add during the tests, so they don't affect other test.

afterEach(() => server.resetHandlers());

// clean up after tests are finished
afterAll(() => server.close());
