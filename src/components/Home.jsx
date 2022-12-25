import { Button } from "@mui/material"
import React from "react"
import {Link} from "react-router-dom"
import { Emp } from "./Emp"
import { Cars } from "./Cars"
import { Branches } from "./Branches"

export const Home=()=>{
return(
    <React.Fragment>
        <h1>My Home</h1>
        <br/>
        <Branches/>
        <br/>
        <Cars/>
        <br/>
        <Emp/>
        <br/>
        <br/>
        <Link to="/contact">
        <Button variant="contained">Go to Contact</Button>
        </Link>
    </React.Fragment>
)

}