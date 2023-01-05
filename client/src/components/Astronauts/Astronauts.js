import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Astronaut from "./Astronaut/Astronaut";
import useStyles from './styles'

const Astronauts = () => {
    const astronauts = useSelector((state)=> state.astronauts);
    const classes = useStyles();
    console.log(astronauts);
    return (
        !astronauts.length ? <CircularProgress /> :(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {astronauts.map((astronaut)=>(
                    <Grid key={astronaut._id} item xs={12} sm={6}>
                        <Astronaut astronaut={astronaut}></Astronaut>
                    </Grid>
                ))}
            </Grid>
    )
    );
}

export default Astronauts;