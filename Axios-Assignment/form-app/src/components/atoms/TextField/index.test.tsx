import { render, screen } from "@testing-library/react";
import TextField from "./index";
import { ChangeEvent } from "react";

test("Should render textfield with placeholder", () => {
  render(
    <TextField
      placeholder="name"
      type={"number"}
      onChange={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
      }}
    ></TextField>
  );
  const placeholderText=screen.getByPlaceholderText(/name/i)
  expect(placeholderText).toBeInTheDocument();
});
test("Should render Textfiled with testing type", () => {
    render(
      <TextField
        placeholder="name"
        type="number"
        onChange={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      ></TextField>
    );
    const inputElement = screen.getByPlaceholderText(/name/i) as HTMLInputElement;
    expect(inputElement).toHaveAttribute('type', 'number');
  });
  test("Should render Textfield with tesing varaint",()=>{
    render(<TextField placeholder="name" type="number"  onChange={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
  }}></TextField>)
  const inputElement=screen.getByPlaceholderText(/name/i) as HTMLInputElement
  expect(inputElement).toHaveAttribute('variant','outlined');
  })
