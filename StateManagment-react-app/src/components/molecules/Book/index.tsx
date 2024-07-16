import React from "react";
import styled from "styled-components";
import Typography from "../../atoms/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconTypography from "../IconTypography";
import Button from "../../atoms/Button";
import { Box } from "@mui/material";
interface BookProps {
  src: string;
  data1: string;
  data2: string;
  readtime: string;
  totalreadings: string;
  reading: boolean;
  onClick: () => void;
}
const BookContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  height: auto;
  padding: 16px;
  border-radius: 8px;
`;
const StyledImage = styled.img`
  width: 200px;
  height: 200px;
`;
const IconTypographyStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin: 3px;
`;
const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin: 3px;
`;
const TypographyStyled = styled.div`
  text-align: start;
  margin: 3px;
`;
const H5Typography = styled(Typography)`
  font-family: "Times New Roman";
  font-size: 1.5rem; /* Example size adjustment */
  font-weight: 800;
`;
const CompleteBook = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  margin: 3px;
  width: auto;
`;
const Book: React.FC<BookProps> = ({
  src,
  data1,
  data2,
  readtime,
  totalreadings,
  reading,
  onClick,
}) => {
  return (
    <CompleteBook>
      <BookContainerStyle>
        <StyledImage src={src} alt="images not found" />
        <TypographyStyled>
          <H5Typography variant="h5">{data1}</H5Typography>
          <Typography variant="body2">{data2}</Typography>
        </TypographyStyled>
        <IconTypographyStyled>
          <Box>
            <IconTypography
              src={<AccessTimeIcon />}
              data={readtime}
            ></IconTypography>
          </Box>
          <Box>
            <IconTypography
              src={<VisibilityIcon />}
              data={totalreadings}
            ></IconTypography>
          </Box>
        </IconTypographyStyled>
      </BookContainerStyle>
      <ButtonStyled onClick={onClick}>
        {reading ? "Finished me" : "Read Again me"}
      </ButtonStyled>
    </CompleteBook>
  );
};
export default Book;
