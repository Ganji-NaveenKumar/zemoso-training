import React from "react";

import { Typography as MuiTypography } from "@mui/material";
interface TypographyProps {
  children: React.ReactNode;
  variant: "body1" | "h1" | "h3" | "body2" | "h5";
}
const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  return (
    <div>
      <MuiTypography variant={variant}>{children}</MuiTypography>
    </div>
  );
};
export default Typography;
