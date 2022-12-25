import React from "react";
import {Grid,Card,CardContent} from "@mui/material"

export const CityList=({data})=>{
    return(
        <React.Fragment>
           <Card>
            <CardContent>
                <Grid container spacing={2} align="center">
                <Grid item xs={4} >
                    Id
                </Grid>
                <Grid item xs={4} >
                    Name
                </Grid>
                <Grid item xs={4} >
                  Country Id
                </Grid>

                {
                  data && data.length>0 &&  data.map(item=>
                       <React.Fragment>
                        <Grid item xs={4}>
                            {item.id}
                        </Grid>
                        <Grid item xs={4}>
                        {item.name}
                        </Grid>
                        <Grid item xs={4}>
                        {item.ctrId}
                        </Grid>
                       </React.Fragment> 
                        )
                }
                </Grid>
            </CardContent>
           </Card>
        </React.Fragment>
    )

}