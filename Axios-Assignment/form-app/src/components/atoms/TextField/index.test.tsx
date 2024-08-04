import { render, screen } from "@testing-library/react";
import TextField from "./index";
import { ChangeEvent } from "react";

test("Textfiled testing placeholder", () => {
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
test("Textfiled testing type", () => {
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
  test("Textfield tesing varaint",()=>{
    render(<TextField placeholder="name" type="number"  onChange={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
  }}></TextField>)
  const inputElement=screen.getByPlaceholderText(/name/i) as HTMLInputElement
  expect(inputElement).toHaveAttribute('variant','outlined');
  })
