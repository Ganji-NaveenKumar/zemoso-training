import React from "react";
import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <MuiButton onClick={onClick}>{children}</MuiButton>;
};
export default Button;
