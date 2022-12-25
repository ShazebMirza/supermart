import React from "react";
import {City} from "./City"
import { CountryList } from "./CountryList";

export const Contact=()=>{
    return(
        <React.Fragment>
        {/* <h1>My Contact</h1> */}
        <City/>
        <CountryList/>
        </React.Fragment>
        
    )
}