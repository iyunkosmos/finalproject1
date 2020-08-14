import React from "react";
import Tickets from "./OpenTickets";
import { Grid } from "@material-ui/core";
import TicketsList from "./TConstants";

const TicketContent = () => {
  const getTicketsCard = Ticket => {
    return (
      <Grid item xs={12} sm={4}>
        <Tickets {...Ticket} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {TicketsList.map(Ticket => getTicketsCard(Ticket))}
    </Grid>
  );
};

export default TicketContent;
