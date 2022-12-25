import { Button, Card, CardContent, Grid } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";

export const ServiceItem=({item})=>{
    return(
        <React.Fragment>
            <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={1}>
                            <Card sx={{bgcolor:item.completed? "green" : "yellow", height: 60}}>
                                <CardContent>Status</CardContent>
                            </Card>
                        </Grid>
                    <Grid item xs={5}>
                            <Card sx={{bgcolor:"orange"}}>
                                <CardContent>{item.title}</CardContent>
                            </Card>
                        </Grid>
                    <Grid item xs={1}>
                            {item.userId}
                        </Grid>
                        <Grid item xs={1}>
                            {item.completed ? "Completed":"In Progress"}
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained">Update</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained">Delete</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            </Grid>
        </React.Fragment>
    )
}