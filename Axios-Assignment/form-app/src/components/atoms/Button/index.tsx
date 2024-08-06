import React, { MouseEventHandler } from "react";
import { Button as MuiButton } from "@mui/material";
interface ButtonProps{
    children:React.ReactNode;
    onclick?:MouseEventHandler<HTMLButtonElement>;
    type:"submit"|"button"|"reset";
}
const Button:React.FC<ButtonProps>=({children,onclick,type})=>{
    return(
        <MuiButton variant='contained' onClick={onclick} type={type}>{children}</MuiButton>
    );
}
export default Button;