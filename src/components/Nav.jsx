
import React,{useState} from "react";
import { Grid,Button } from "@mui/material";
import {Link} from "react-router-dom"


export const Nav=()=>{
const [Data,setData]=useState(["Home","Services","Contact","AboutUs"])
return (
<React.Fragment>
<Grid container spacing={2}>

<Grid item xs={2}>
<Link to="/home">
    <Button>Home</Button>
</Link>
</Grid>
<Grid item xs={2}>
<Link to="/services">
    <Button>Services</Button>
</Link>
</Grid>
<Grid item xs={2}>
<Link to="/contact">
    <Button>Contact</Button>
</Link>
</Grid>
<Grid item xs={2}>
<Link to="/aboutus">
    <Button>Aboutus</Button>
</Link>
</Grid>
<Grid item xs={2}>
<Link to="/shopping">
    <Button>Shopping</Button>
</Link>
</Grid>


{/* {
Data.map((item)=>
<Grid item xs={2}>
<Link to = {`/${item.toLowerCase()}`}>
    <Button variant="contained">{item}</Button>
</Link>
</Grid>
)
} */}
</Grid>
</React.Fragment>
)
}
