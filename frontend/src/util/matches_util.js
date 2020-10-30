import axios from 'axios';

export const fetchMatch = (matchId) => {
   return axios.get(`/api/matches/${matchId}`)
};

export const sendMessage = (matchId, data) => (
   axios.patch(`/api/matches/${matchId}`, data)
);

export const createMatch = (data) => (
   axios.post(`/api/matches`, data)
);