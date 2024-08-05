import React from "react";
import Typography from "../../atoms/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconTypography from "../IconTypography";
import { Box } from "@mui/material";
import {
  CompleteBook,
  BookContainerStyle,
  TypographyStyled,
  H5Typography,
  IconTypographyStyled,
  ButtonStyled,
  StyledImage,
} from "../../../themes/index";
import { dataset } from "../../../utils/Constants/data";
interface BookProps {
  src: string;
  data1: string;
  data2: string;
  readtime: string;
  totalreadings: string;
  reading: boolean;
  onClick: () => void;
}

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
        {reading ? dataset.Finish : dataset.Read}
      </ButtonStyled>
    </CompleteBook>
  );
};
export default Book;
