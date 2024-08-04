import React from "react";
import { Typography as MuiTypography } from "@mui/material";
interface TypograhpyProps{
    children:React.ReactNode;
    variant:'h3'|'subtitle1'
}
const Typography:React.FC<TypograhpyProps>=({children,variant})=>{
    return(
        <MuiTypography variant={variant}>{children}</MuiTypography>
    );
}
export default Typography;