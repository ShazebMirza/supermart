import React, { useState } from "react"
import {Grid, Button, TextField} from "@mui/material"
import axios from "axios";


export const Fullname=()=>{

    const[fname,setFname] = useState("")
    const[lname,setLname] = useState("")
    const[fullname,setFullname] = useState("")


    const handleFullname= async ()=>{
        const payload = {fname,lname};
        const result = await axios.post("http://localhost:4040/fullname",payload)
        setFullname(result.data)
    }
return(
<React.Fragment>
<Grid container spacing={2}>
    <Grid item xs={4}>
    <TextField label="First name" fullWidth onChange={(e)=>setFname(e.target.value)} variant="outlined"/>        
    </Grid>
    <Grid item xs={4}>
    <TextField label="Last name" fullWidth onChange={(e)=>setLname(e.target.value)} variant="outlined"/>       
    </Grid>  
    <Grid item xs={4}>
    <Button onClick={handleFullname} variant="contained" fullWidth>Submit</Button>        
    </Grid>
    <Grid item xs={12}>
    <h1>{fullname}</h1>
    </Grid>
    
</Grid>
</React.Fragment>
)
}