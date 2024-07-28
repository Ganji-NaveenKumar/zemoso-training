import React from "react";
import {StyledIconTyp,StyledIcon,StyledTypography} from "../../../themes/index";
interface IconTypographyProps {
  src: React.ReactElement;
  data: string;
}

const IconTypography: React.FC<IconTypographyProps> = ({ src, data }) => {
  return (
    <StyledIconTyp>
      <StyledIcon src={src} alt="image not found" />
      <StyledTypography variant="body2">{data}</StyledTypography>
    </StyledIconTyp>
  );
};
export default IconTypography;
