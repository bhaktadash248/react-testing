import axios from 'axios';

export const getSecretWord = () =>{
    return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response = response.data)
}