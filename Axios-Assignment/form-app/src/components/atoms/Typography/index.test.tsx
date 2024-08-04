import { render, screen } from "@testing-library/react";
import Typography from './index';

test("Typography component renders with correct variant and children", () => {
  render(<Typography variant="h3">TypographyText</Typography>);
  const typographyElement = screen.getByText(/TypographyText/i);

  expect(typographyElement).toBeInTheDocument();
//   expect(typographyElement).toHaveTextContent(/TypographyText/i);

  expect(typographyElement).toHaveClass('MuiTypography-h3');
});

test("Typography component renders with subtitle1 variant", () => {

  render(<Typography variant="subtitle1">Subtitle Text</Typography>);

  const typographyElement = screen.getByText(/Subtitle Text/i);

//   expect(typographyElement).toBeInTheDocument();

  expect(typographyElement).toHaveClass('MuiTypography-subtitle1');
});
