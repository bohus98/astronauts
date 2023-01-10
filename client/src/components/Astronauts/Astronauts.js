import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Astronaut from "./Astronaut/Astronaut";
import useStyles from './styles'

const Astronauts = ({setCurrentId}) => {
    const astronauts = useSelector((state)=> state.astronauts);

    const classes = useStyles();

    return (
        !astronauts.length ? <CircularProgress /> :(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {astronauts.map((astronaut)=>(
                    <Grid key={astronaut._id} item xs={12} sm={12} md={6} lg={4}>
                        <Astronaut astronaut={astronaut} setCurrentId={setCurrentId}></Astronaut>
                    </Grid>
                ))}
            </Grid>
    )
    );
}

export default Astronauts;