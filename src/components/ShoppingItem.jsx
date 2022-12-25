import { Card, CardContent, Grid, Button,Rating, Badge } from "@mui/material";
import { yellow } from "@mui/material/colors";
import React from "react";

export const ShoppingItem=({item})=>{
    return(
        <React.Fragment>
            <Grid item xs={3}>
            <Card sx={{bgcolor:"orange"}}>
                <CardContent>
                    <Grid align = "center" container spacing={2}>
                    <Grid item xs={12}>
                        <Badge 
                        badgeContent={"$"+item.price} max={999} color="primary">
                        <img src={item.image} width={100} height={100}/>
                        </Badge>
                    </Grid>
                    
                    <Grid item xs={12}>
                    <strong>{item.title.slice(0,19).trim()+"..."} </strong>
                    </Grid>
                    <Grid item xs={12}>
                            {item.description.slice(0,50).trim()+"..."}
                        </Grid>
                        <Grid item xs={8}>
                            <Rating value={item.rating.rate}/>
                        </Grid>
                        <Grid item xs={2}>
                            {`(${item.rating.count})`}
                        </Grid>
                        </Grid>
                </CardContent>
            </Card>
            </Grid>
        </React.Fragment>
    )
}