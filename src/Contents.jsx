import React from "react";
import Forms from "./Forms";
import { Grid } from "@material-ui/core";
import FormsList from "./Constants";

const Contents = () => {
  const getFormsCard = Form => {
    return (
      <Grid item xs={12} sm={4}>
        <Forms {...Form} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {FormsList.map(Form => getFormsCard(Form))}
    </Grid>
  );
};

export default Contents;
