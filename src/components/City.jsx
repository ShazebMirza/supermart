import React,{useState} from "react";
import {Grid, Button, Card, CardContent, TextField} from "@mui/material"
import { CityList } from "./CityList";
import axios from "axios"



export const City=()=>{
    const [data,setData] = useState([]);
    const [txt,setTxt] = useState(1);

const handleFind= async()=>{
const payload = {
    ctrId: txt,
};


const result =await axios.post("http://localhost:3030/citiesbyfilt",payload);
setData(result.data);
}
return(
<React.Fragment>
<Grid container spacing={2}>
    <Grid item xs={5}>
        Dropdown
    </Grid>
    <Grid item xs={5}>
        <TextField fullWidth label="Search..." variant="outlined" onChange={(e)=>setTxt(e.target.value)}/>
    </Grid>
    <Grid item xs={2}>
     <Button fullWidth variant="contained" onClick={handleFind}>Find</Button>   
    </Grid>
    <Grid item xs={12}>
    <CityList data={data.result}/>
    </Grid>
</Grid>
</React.Fragment>

)

}