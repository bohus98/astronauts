import * as api from '../api';


export const getAstronauts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchAstronauts();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
    
    
}

export const createAstronaut = (astronaut) => async (dispatch) => {
    try {
        const {data} = await api.createAstronaut(astronaut);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}