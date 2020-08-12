import React, { useState } from "react"
import Back from "./Back"
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline';
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button"
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem"
import { FormControlLabel } from "@material-ui/core";

const days = [
  {
    value: 'mon',
    label: 'Monday',
  },
  {
    value: 'tue',
    label: 'Tuesday',
  },
  {
    value: 'wed',
    label: 'Wednesday',
  },
  {
    value: 'thur',
    label: 'Thursday',
  },
  {
    value: 'fri',
    label: 'Friday',
  },
  {
    value: 'Sat',
    label: 'Saturday',
  },
];

const dates = [
  {
    value: '1',
    label: '1st',
  },
  {
    value: '2',
    label: '2nd',
  },
  {
    value: '3',
    label: '3rd',
  },
  {
    value: '4',
    label: '4th',
  },
  {
    value: '5',
    label: '5th',
  },
  {
    value: '6',
    label: '6th',
  },
  {
    value: '7',
    label: '7th',
  },
  {
    value: '8',
    label: '8th',
  },
  {
    value: '9',
    label: '9th',
  },
  {
    value: '10',
    label: '10th',
  },
  {
    value: '11',
    label: '11th',
  },
  {
    value: '12',
    label: '12th',
  },
  {
    value: '13',
    label: '13th',
  },
  {
    value: '14',
    label: '14th',
  },
  {
    value: '15',
    label: '15th',
  },
  {
    value: '16',
    label: '16th',
  },
  {
    value: '17',
    label: '17th',
  },
  {
    value: '18',
    label: '18th',
  },
  {
    value: '19',
    label: '19th',
  },
  {
    value: '20',
    label: '20th',
  },
  {
    value: '21',
    label: '21st',
  },
  {
    value: '22',
    label: '22nd',
  },
  {
    value: '23',
    label: '23rd',
  },
  {
    value: '24',
    label: '24th',
  },
  {
    value: '25',
    label: '25th',
  },
  {
    value: '26',
    label: '26th',
  },
  {
    value: '27',
    label: '27th',
  },
  {
    value: '28',
    label: '28th',
  },
  {
    value: '29',
    label: '29th',
  },
  {
    value: '30',
    label: '30th',
  },
  {
    value: '31',
    label: '31st',
  },
];
const months = [
  {
    value: 'Jan',
    label: 'January',
  },
  {
    value: 'Feb',
    label: 'February',
  },
  {
    value: 'Mar',
    label: 'March',
  },
  {
    value: 'Apr',
    label: 'April',
  },
  {
    value: 'May',
    label: 'May',
  },
  {
    value: 'Jun',
    label: 'June',
  },
  {
    value: 'Jul',
    label: 'July',
  },
  {
    value: 'Aug',
    label: 'August',
  },
  {
    value: 'Sep',
    label: 'September',
  },
  {
    value: 'Oct',
    label: 'October',
  },
  {
    value: 'Nov',
    label: 'November',
  },
  {
    value: 'Dec',
    label: 'December',
  },
];

const times = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '8',
    label: '8',
  },
  {
    value: '9',
    label: '9',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '12',
    label: '12',
  },
];

const ampms = [
  {
    value: 'am',
    label: 'AM',
  },
  {
    value: 'pm',
    label: 'PM',
  },
];

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    paper: {
        padding: 20

    }
}))


function RequestForm (){
  const classes = useStyles();
  const [day, setDays] = useState("")
  const [date, setDate] = useState("")
  const [month, setMonths] = useState("")
  const [time, setTime] = useState("")
  const [ampm, setAMPM] = useState("")

  
  
return(
  
<div>
<Back />
<CssBaseline /> 
<Paper variant="outlined" className={classes.paper}>
  <form className = {classes.form}> 
  <FormControl component= 'fieldset'>
    <Grid container xs ={12}>
  <FormLabel> Name:</FormLabel>
  </Grid>
  <Grid container xs = {12}>
<FormLabel> What service </FormLabel>
< RadioGroup row>  <Typography>
<FormControlLabel value="electricity" control={<Radio />} label="Electricity" labelPlacement = "start" />
<FormControlLabel value="masonry" control={<Radio />} label="Masonry" labelPlacement = "start" />
<FormControlLabel value="carpentry" control={<Radio />} label="Carpentry" labelPlacement = "start" />
<FormControlLabel value="plumbing" control={<Radio />} label="Plumbing" labelPlacement = "start" />
</Typography>
</RadioGroup>
</Grid>
</FormControl>
<FormLabel>Location:</FormLabel>
<TextField required id= "standard-secondary" label="Enter your location" color="secondary" />
<FormLabel>Description of Problem</FormLabel>
<TextField id="standard-multiline-static" label="Multiline" multiline rows={5} />
<FormLabel> Time Available for Visitation: </FormLabel>
<TextField id="standard-select-day" select label="Select" value={day} onChange={(e)=>setDays(e.currentTarget.value)}>
    {days.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
  ))}
</TextField>
<TextField id="standard-select-date" select label="Select" value={date} onChange={(e)=>setDate(e.currentTarget.value)}>
    {dates.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
  ))}
</TextField>
</form>
<TextField id="standard-select-month" select label="Select" value={month} onChange={(e)=>setMonths(e.currentTarget.value)}>
    {months.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
  ))}
</TextField>
<TextField id="standard-select-time" select label="Select" value={time} onChange={(e)=>setTime(e.currentTarget.value)}>
    {times.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
  ))}
</TextField>
<TextField id="standard-select-ampm" select label="Select" value={ampm} onChange={(e)=>setAMPM(e.currentTarget.value)}>
    {ampms.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
  ))}
</TextField>

<Button
            type="submit"
            size = "medium"
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Send
          </Button>
          </Paper>
         
</div>
  
  )
}
export default RequestForm 