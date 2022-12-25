
import React,{useState,useEffect} from "react";
import { Grid,Card, CardContent } from "@mui/material";
import axios from "axios";

export const Cars=()=>{
 const [Data, setData]=useState([]);

 const getData= async()=>{
const result= await axios.get("http://localhost:5050/cars");
setData(result.data);
 };

 useEffect(()=>{
 getData();
 },[])

 return (
 <React.Fragment>
 <Grid container spacing={2}>
 {
 Data.map(item=> 
<Grid item xs={3}>
<Card sx={{bgcolor:item.color}}>
 <CardContent>
{item.brand} - {item.model}
 </CardContent>
</Card>
</Grid> 
)
 }
 </Grid>
</React.Fragment>
)
}
