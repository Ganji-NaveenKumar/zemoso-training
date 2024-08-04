import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from './index';

describe("Button component", () => {
  test("renders the button with children", () => {
    render(<Button type="button">Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the button with children-Hello", () => {
    render(<Button type="button">click me</Button>);
    const buttonElement = screen.getByText(/Hello/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button type="button" onclick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("sets the button type correctly", () => {
    render(<Button type="submit">Submit</Button>);
    const buttonElement = screen.getByText(/Submit/i);
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
