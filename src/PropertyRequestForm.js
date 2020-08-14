import React, { useState } from "react"
import Back from "./Back"
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from "@material-ui/core/Button"
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    padding: 20,
    margin: '10px auto'
  },
  mb10: {
    marginBottom: '15px'
  },
  flex1: {
    flex: 1
  }

}))


function PropertyRequestForm() {


  return (

    <div>
      <Back />
      <CssBaseline />
      <Grid container xs={12}>
        <Paper variant="outlined" className={classes.paper}>
          <form className={classes.form}>
            <FormControl component='fieldset'>
              <Grid className={classes.mb10} container xs={12}>
                <FormLabel> Name:</FormLabel>
                </Grid>
                <Grid container xs={12}>
                  <Grid item xs={4}>
                  </Grid>
                  <FormLabel> Position </FormLabel>
                </Grid>                             
            </FormControl>
        <Grid>
          <Autocomplete
            id="combo-box-demo"
            options={positions}
            getOptionLabel={(option) => option.position}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          />
);



</Grid>
  <Grid container xs={12}>
    <Grid item xs={4}>
      <FormLabel> Property Requested: </FormLabel>
    </Grid>
    
    <Grid>
      <Autocomplete
        id="combo-box-demo"
        options={properties}
        getOptionLabel={(option) => option.property}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      />
    </Grid>
     <Grid container xs={12}>
            <label>Please upload registrar's approval letter</label>
            <input
              accept="image/*"
              className={classes.input}
              multiple
              type="file"
            />
          
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
      </Button>
            </label>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </Grid>
      
  
    
</Grid> 


</form> 

</Paper> 
  </Grid >
  </div > 
)
}

const properties = [
{ property: 'Apartment' },
{ property: 'Bungalow' },
{ property: 'Duplex' },
];

const positions = [
{ position: 'PG Student' },
{ position: 'Faculty Member' },
{ position: 'Staff Member' },
];
export default PropertyRequestForm 