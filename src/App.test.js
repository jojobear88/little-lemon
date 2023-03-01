import { render, screen } from "@testing-library/react";
import Reservation from "./pages/Reservation";

test("Renders the BookingForm heading", () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Reservation Form");
  expect(headingElement).toBeInTheDocument();
});

test("Create the initial state for the availableTimes", () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Reservation Form");
  expect(headingElement).toBeInTheDocument();
});
