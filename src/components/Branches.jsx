import React, {useState,useEffect} from "react";
import {Grid,Card,CardContent} from "@mui/material"
import axios from "axios"

export const Branches=()=>{
    const [data,setData] = useState([])

    const getData= async ()=>{
        const result =await axios.get("http://localhost:5050/branches");
        setData(result.data);
    }

    useEffect(()=>{
        getData();

    },[])


    return(
        <React.Fragment>
            <Grid container spacing={2}>
                {
                data.map((item)=>
                <Grid item xs={3}>
                    <Card sx={{bgcolor:"orange"}}>
                        <CardContent>
                            {item.name} , {item.city}
                        </CardContent>
                    </Card>
                </Grid>

                
                )}
            </Grid>

        </React.Fragment>
    )

}