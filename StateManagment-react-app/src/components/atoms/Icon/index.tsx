import React from "react";
import MuiIcon from "@mui/material/Icon";

interface IconProps {
  src: React.ReactElement;
  alt: string;
}
const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return (
    <div>
      <MuiIcon>{src}</MuiIcon>
    </div>
  );
};
export default Icon;
