import React, {useEffect, useState} from "react";
import { Grid,Button, Textfield, TextField } from "@mui/material";
import { ServiceItem } from "./ServiceItem";
import axios from "axios";

export const Services=()=>{
    const [data,setData] = useState([]);
    const [oridata,setOridata] = useState([]);
    const [txt,setTxt] = useState(""); 

    const getData = async()=>{
        const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData(result.data);
        setOridata(result.data);
    }

    const handleStatus=(iscomplete)=>{
        const filtered = oridata.filter(item => item.completed===iscomplete);
        setData(filtered);
    }

    useEffect(()=>{
     const filtered = oridata.filter((item) =>(item.title.toUpperCase().includes(txt.toUpperCase())));
     setData(filtered);
    },[txt])

    useEffect(()=>{
        getData();
    },[]);

    return(
        <React.Fragment>
       <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField 
            onChange={(e)=>setTxt(e.target.value)}
            variant="outlined" label="Search..." fullWidth/>
        </Grid>
        <Grid item xs={2}>
            <Button sx={{height:55}} variant="contained" color="warning" fullWidth 
            onClick={()=>handleStatus(false)}>In Progress</Button>
        </Grid>
        <Grid item xs={2}>
            <Button sx={{height:55}} variant="contained" color="success" fullWidth
            onClick={()=>handleStatus(true)}>Completed</Button>
        </Grid>
        {
            data.map((item) =>(
                <ServiceItem item={item}/>)
            )
        }
       </Grid>
        </React.Fragment>

    )
}