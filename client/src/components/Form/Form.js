import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";

import useStyles from './styles'

import { createAstronaut } from "../../actions/astronauts";

const Form = () => {
    const [astronautData, setAstronautData] = useState({firstName: '',lastName: '',superPowers: '',selectedFile: '',birthDate: '',about:''});
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createAstronaut(astronautData))
    }
    const clear = () => {}
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Adding an Astronaut</Typography>
            <TextField name="firstname" variant="outlined" label="First Name" fullWidth value={astronautData.firstName} onChange={(e)=>setAstronautData({...astronautData,firstName:e.target.value})}/>
            <TextField name="lastname" variant="outlined" label="Last Name" fullWidth value={astronautData.lastName} onChange={(e)=>setAstronautData({...astronautData,lastName:e.target.value})}/>
            <TextField name="superpowers" variant="outlined" label="Super Powers (comma separated)" fullWidth value={astronautData.superPowers} onChange={(e)=>setAstronautData({...astronautData,superPowers:e.target.value})}/>
            <TextField name="birthDate" variant="outlined" label="Birth Date (DD.MM.YYYY)" fullWidth value={astronautData.birthDate} onChange={(e)=>setAstronautData({...astronautData,birthDate:e.target.value})}/>
            <TextField name="about" variant="outlined" label="About Me" fullWidth value={astronautData.about} onChange={(e)=>setAstronautData({...astronautData,about:e.target.value})}/>
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setAstronautData({...astronautData,selectedFile:base64})}/>
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" onClick={clear} size="small" fullWidth>Clear</Button>
            </form>

        </Paper>
    );
}

export default Form;