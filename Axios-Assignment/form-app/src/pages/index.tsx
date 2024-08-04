import React from "react";
import Template from "../components/template";
import AddData from "../components/organisms/EventHandler";
const Page:React.FC=()=>{
    return(
        <>
        <Template Data={<AddData/>}/>
        </>
        
    );
}
export default Page;