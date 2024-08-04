import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";
interface TextFieldProps{
    placeholder:string;
    type:HTMLInputTypeAttribute;
    id?:string;
    onChange:React.ChangeEventHandler<HTMLInputElement>;
    variant?:string;
}
const TextField:React.FC<TextFieldProps>=({placeholder,type,onChange})=>{
    return(
        <MuiTextField type={type} variant="outlined" size="small"  placeholder={placeholder} onChange={onChange}></MuiTextField>
    );
}
export default TextField;