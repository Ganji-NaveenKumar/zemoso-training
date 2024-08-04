import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

interface TemplateProps {
  Data: React.ReactNode;
}
const StyledForm = styled(Box)`
  display:flex;
  margin-top:30px;
  justify-content:center;
`;
const Template: React.FC<TemplateProps> = ({Data}) => {
  return (
    <Box>
      <StyledForm>{Data}</StyledForm>
    </Box>
  );
};
export default Template;
