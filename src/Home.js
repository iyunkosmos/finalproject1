import React from "react";
import Header from "./Header";
import Contents from "./Contents";
import {Grid} from "@material-ui/core";


const Home = () => {
    return (
        <div>
            <Grid container direction="column">
                <Header/>
                <Grid item/>
                <Grid item container>
                    <Grid item xs={0} sm={2}/>
                    <Grid item xs={12} sm={8}>
                        <Contents/>
                    </Grid>
                    <Grid item xs={0} sm={2}/>
                </Grid>
            </Grid>

        </div>
    )
}
export default Home;
