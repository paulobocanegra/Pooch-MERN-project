import axios from 'axios'

export const fetchUsers = () => (
   axios.get(`/api/users`)
);

export const updateUser = (userId, data) => (
   axios.patch(`api/users/${userId}`, data)
);