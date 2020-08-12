import React from "react";
import TicketContent from "./TicketContent";
import { Grid } from "@material-ui/core";




const Tickets = () => {
    return (
      <div>
<Grid container direction = "column">
      <Grid item />
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <TicketContent />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
    
    </div> 
    )
}
export default Tickets; 