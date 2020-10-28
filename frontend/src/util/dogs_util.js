import axios from 'axios';

export const getDogs = () => {
    return axios.get('/api/dogs')
};

export const getDog = (dogId) => {
    return axios.get(`/api/dogs/${dogId}`)
};

export const createDog = (data) => {
    return axios.post('/api/dogs/', data)
};