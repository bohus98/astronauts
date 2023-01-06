import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';


export const getAstronauts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchAstronauts();
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createAstronaut = (astronaut) => async (dispatch) => {
    try {
        const {data} = await api.createAstronaut(astronaut);
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateAstronaut = (id,astronaut) => async (dispatch) => {
    try {
       const {data} =  await api.updateAstronaut(id,astronaut);

       dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteAstronaut = (id) => async (dispatch) => {
    try {
        await api.deleteAstronaut(id);
        dispatch({type: DELETE, payload:id});
    } catch (error) {
        console.log(error);
    }
}