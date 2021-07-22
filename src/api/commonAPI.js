import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com/'
const config = {
  'Content-type': 'application/json; charset=UTF-8'
}


export const get = path => {
  return axios
    .get(`${BASE_URL}${path}`)
}

export  const post = (path, payload) =>
axios
  .post(`${BASE_URL}${path}`, payload,{headers:config});


export const put = (path, payload) => {
  axios
    .put(`${BASE_URL}${path}${payload.id}`, payload,{headers:config});
}

export const deleting = (path, id) => {
  return axios
  .delete(`${BASE_URL}${path}/${id}`)
}