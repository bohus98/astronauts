import axios from 'axios';

const url = 'https://astronauts-app.herokuapp.com/astronauts';

export const fetchAstronauts = () => axios.get(url);
export const createAstronaut = (newAstronaut) => axios.post(url,newAstronaut);
export const updateAstronaut = (id, updatedAstronaut) => axios.patch(`${url}/${id}`, updatedAstronaut);
export const deleteAstronaut = (id) => axios.delete(`${url}/${id}`);
