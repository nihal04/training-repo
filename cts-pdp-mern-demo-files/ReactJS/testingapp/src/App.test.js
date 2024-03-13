import { render, screen } from "@testing-library/react";
import App, { factorial } from "./App";

test("test factorial function", () => {
  let result = factorial(5);
  expect(result).toBe(120);
});
