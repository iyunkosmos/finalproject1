import React, {useState} from "react"
import Back from "./Back"
import {makeStyles} from '@material-ui/core/styles';
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
import {FormControlLabel} from "@material-ui/core";
import {
    KeyboardDatePicker,
    KeyboardTimePicker,
} from '@material-ui/pickers';
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


function RequestForm() {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (

        <div>
            <Back/>
            <CssBaseline/>
            <Grid container xs={12}>
                <Paper variant="outlined" className={classes.paper}>
                    <form className={classes.form}>
                        <FormControl component='fieldset'>
                            <Grid className={classes.mb10} container xs={12}>
                                <Grid item xs={12}><FormLabel> Name:</FormLabel></Grid>
                            </Grid>
                            <Grid container xs={12}>
                                <Grid item xs={4}>
                                    <FormLabel> What service </FormLabel>
                                </Grid>
                                <Grid item xs={8}>
                                    <RadioGroup row>
                                        <Typography>
                                            <FormControlLabel value="electricity" control={<Radio/>} label="Electricity"
                                                              labelPlacement="start"/>
                                            <FormControlLabel value="masonry" control={<Radio/>} label="Masonry"
                                                              labelPlacement="start"/>
                                            <FormControlLabel value="carpentry" control={<Radio/>} label="Carpentry"
                                                              labelPlacement="start"/>
                                            <FormControlLabel value="plumbing" control={<Radio/>} label="Plumbing"
                                                              labelPlacement="start"/>
                                        </Typography>
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                        </FormControl>
                        <Grid container xs={12}>
                            <Grid item xs={12}>
                                <TextField className={classes.form} required id="standard-secondary"
                                           label="Enter your location" color="secondary"/>
                            </Grid>
                        </Grid>
                        <TextField className={classes.form} id="standard-multiline-static"
                                   label="Description of the problem" multiline rows={5}/>
                        <FormLabel> Time Available for Visitation: </FormLabel>
                            <Grid container>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                <KeyboardTimePicker
                                    margin="normal"
                                    id="time-picker"
                                    label="Time picker"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                            </Grid>

                        <Grid container xs={12}>
                            <Button
                                type="submit"
                                size="medium"
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Send
                            </Button>
                        </Grid>

                    </form>

                </Paper>

            </Grid>

        </div>

    )
}

export default RequestForm
