import styled from "styled-components";
import Button from "../components/atoms/Button";
import Typography from "../components/atoms/Typography";
import Icon from "../components/atoms/Icon";
export const  BookContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  height: auto;
  padding: 16px;
  border-radius: 8px;
`;
export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
`;
export const IconTypographyStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin: 3px;
`;
export const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin: 3px;
`;
export const TypographyStyled = styled.div`
  text-align: start;
  margin: 3px;
`;
export const H5Typography = styled(Typography)`
  font-family: "Times New Roman";
  font-size: 1.5rem; /* Example size adjustment */
  font-weight: 800;
`;
export const CompleteBook = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  margin: 3px;
  width: auto;
`;
export const StyledIcon = styled(Icon)`
  width: 5px;
  height: 5px;
`;
export const StyledTypography = styled(Typography)`
  font-size: 20px;
`;
export const StyledIconTyp = styled.div`
  display: flex;
  flex-direction: columns;
  align-items: center;
`;