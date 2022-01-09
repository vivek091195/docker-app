import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the text properly", () => {
  render(<App />);
  const linkElement = screen.getByText(/world of Docker/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
