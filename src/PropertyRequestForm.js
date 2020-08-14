import React from "react"
import Back from "./Back"
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from "@material-ui/core/Button"
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
    mb5: {
        marginBottom: '7px'
    },
    flex1: {
        flex: 1
    }

}))


function PropertyRequestForm() {

    const classes = useStyles();
    return (
        <div>
            <Back/>
            <CssBaseline/>
            <Grid container xs={12} justify={'center'}>
                <Grid container xs={12} lg={8}>
                    <Paper variant="outlined" className={classes.paper}>
                        <form className={classes.form}>
                            <Grid className={classes.mb10} container xs={12}>
                                <FormLabel> Name:</FormLabel>
                            </Grid>
                            <Grid className={classes.mb10}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={positions}
                                    getOptionLabel={(option) => option.position}
                                    style={{width: 300}}
                                    renderInput={(params) => <TextField {...params}
                                                                        label="Position"
                                                                        variant="outlined"/>}
                                />
                            </Grid>
                            <Grid container xs={12}>

                                <Grid className={classes.mb10} container xs={12}>
                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={properties}
                                        getOptionLabel={(option) => option.property}
                                        style={{width: 300}}
                                        renderInput={(params) => <TextField {...params} label="Property Requested"
                                                                            variant="outlined"/>}
                                    />
                                </Grid>
                                <Grid container xs={12}>
                                    <Grid className={classes.mb5} container xs={12}> <label>Please upload registrar's approval letter</label></Grid>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        multiple
                                        type="file"
                                    />
                                </Grid>


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
            </Grid>
        </div>
    )
}

const properties = [
    {property: 'Apartment'},
    {property: 'Bungalow'},
    {property: 'Duplex'},
];

const positions = [
    {position: 'PG Student'},
    {position: 'Faculty Member'},
    {position: 'Staff Member'},
];
export default PropertyRequestForm
