import axios from 'axios';

const url = 'http://localhost:5000/astronauts';

export const fetchAstronauts = () => axios.get(url);
export const createAstronaut = (newAstronaut) => axios.post(url,newAstronaut);
export const updateAstronaut = (id, updatedAstronaut) => axios.patch(`${url}/${id}`, updatedAstronaut);
export const deleteAstronaut = (id) => axios.delete(`${url}/${id}`);
