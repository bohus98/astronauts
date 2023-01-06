import React from "react";
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from 'react-redux';
import { deleteAstronaut } from "../../../actions/astronauts";

const Astronaut = ({astronaut, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={astronaut.selectedFile} title={astronaut.firstName + ' ' + astronaut.lastdName} ></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6">{astronaut.firstName + ' ' + astronaut.lastName}</Typography>
                
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={()=>setCurrentId(astronaut._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{astronaut.superPowers.map((superPower) => `${superPower} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="body2" component="h2">{astronaut.birthDate}</Typography>
            <CardContent>
            
                <Typography className={classes.title} variant="body2" color="textSecondary" gutterBottom>{astronaut.about}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>dispatch(deleteAstronaut(astronaut._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Astronaut;