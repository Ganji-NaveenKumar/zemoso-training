import React from "react";
import Books from "../components/organisms";
import { Box } from "@mui/material";
const HomePage: React.FC = () => {
  return (
    <Box>
      <Books />
      {/* <img src={ImagePath.LogoImage} alt="not found" /> */}
    </Box>
  );
};
export default HomePage;
