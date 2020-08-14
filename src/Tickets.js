import React from "react";
import TicketContent from "./TicketContent";
import {Grid} from "@material-ui/core";


const Tickets = () => {
    return (
        <Grid container item xs={12} sm={12}>
            <TicketContent/>
        </Grid>
    )
}
export default Tickets;
