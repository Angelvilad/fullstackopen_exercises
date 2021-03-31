import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseUrl)
  .then(response => {
    const {data} = response;
    return data;
  });
}

const create = newPerson => {
  return axios.post(baseUrl, newPerson)
  .then(response => {
    const {data} = response;
    return data;
  });
}

const remove = id => {
  return axios.delete(`${baseUrl}/${id}`)
  .then(response => {
    const {data} = response;
    return data;
  })
}

const update = (id, person) => {
  return axios.put(`${baseUrl}/${id}`, person)
  .then( response => {
    const {data} = response;
    return data;
  })
}

const exportDefault = {getAll, create, remove, update};

export default exportDefault;