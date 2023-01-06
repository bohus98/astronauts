import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";

import useStyles from './styles'

import { createAstronaut, updateAstronaut } from "../../actions/astronauts";

const Form = ({currentId, setCurrentId}) => {
    const [astronautData, setAstronautData] = useState({firstName: '',lastName: '',superPowers: '',selectedFile: '',birthDate: '',about:''});
    const astronaut = useSelector((state)=>currentId ? state.astronauts.find((a)=>a._id===currentId):null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        if(astronaut) setAstronautData(astronaut);
    },[astronaut])
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){dispatch(updateAstronaut(currentId,astronautData));} 
        else {dispatch(createAstronaut(astronautData))}
        clear();
    }
        
    const clear = () => {
        setCurrentId(null);
        setAstronautData({firstName: '',lastName: '',superPowers: '',selectedFile: '',birthDate: '',about:''});
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId?'Editing': 'Adding'} an Astronaut</Typography>
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