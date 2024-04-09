import axios from "axios";

const URL = `http://192.168.1.7:3000/users/`;

export function addUsersAPI(data) {
    return axios.post(`${URL}`, data)
}

export function loginUserAPI() {
    return axios.get(`${URL}`)
}   

export function updateUserAPI(id, updatedData) {
    return axios.put(`${URL}${id}`, updatedData)
}
