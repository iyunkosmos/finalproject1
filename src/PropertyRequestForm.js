import React, { useState } from "react"
import Back from "./Back"
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from "@material-ui/core/Button"
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem"
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const position = [
  {
    value: 'pg',
    label: 'PG Student',
  },
  {
    value: 'faculty',
    label: 'Faculty Member',
  },
  {
    value: 'staff',
    label: 'Staff Member',
  },
];

const property = [
  {
    value: 'apartment',
    label: 'Apartment',
  },
  {
    value: 'bungalow',
    label: 'Bungalow',
  },
  {
    value: 'duplex',
    label: 'Duplex',
  },
  ];


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      }
}))


function PropertyRequestForm (){
  const [position, setPosition] = useState("")
  const [property, setProperty] = useState("")
  const classes = useStyles();

 
  
return(
  
<div>
<Back />
<CssBaseline /> 
  <form className = {classes.form}> 
  <FormControl component= 'fieldset'>
  <FormLabel> Name:</FormLabel>
<FormLabel>Position </FormLabel>
<TextField id="standard-select-position" select label="Select" value={String} onChange={(e)=>setPosition(e.currentTarget.value)}>
    {position.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
  ))}
</TextField>
</FormControl>
<FormLabel>Property Requested:</FormLabel>
<TextField id="standard-select-property" select label="Select" value={String} onChange={(e)=>setProperty(e.currentTarget.value)}>
    {property.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
  ))}
</TextField>
<label>Please upload registrar's approval letter</label>
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
<Button
            type="submit"
            size = "medium"
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Send
          </Button>
          </form>
</div>
  
  )
}
export default PropertyRequestForm 