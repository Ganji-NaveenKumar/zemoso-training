import React from "react";
import Icon from "../../atoms/Icon";
import styled from "@emotion/styled";
import Typography from "../../atoms/Typography";
interface IconTypographyProps {
  src: React.ReactElement;
  data: string;
}
const StyledIcon = styled(Icon)`
  width: 5px;
  height: 5px;
`;
const StyledTypography = styled(Typography)`
  font-size: 20px;
`;
const StyledIconTyp = styled.div`
  display: flex;
  flex-direction: columns;
  align-items: center;
`;
const IconTypography: React.FC<IconTypographyProps> = ({ src, data }) => {
  return (
    <StyledIconTyp>
      <StyledIcon src={src} alt="image not found" />
      <StyledTypography variant="body2">{data}</StyledTypography>
    </StyledIconTyp>
  );
};
export default IconTypography;
