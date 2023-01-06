import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {getAstronauts} from './actions/astronauts'
import astronaut from './images/astronaut.png'
import Astronauts from "./components/Astronauts/Astronauts";
import Form from "./components/Form/Form";
import useStyles from './styles'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAstronauts());
    },[currentId,dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Astronauts</Typography>
                <img className={classes.image} src={astronaut} alt="astronaut" height={60} />
               
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Astronauts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;