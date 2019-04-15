import axios from 'axios';

axios.defaults.baseURL = 'https://dog.ceo/api';

export const getDogs = () => (
    axios.get('/breeds/list')
        .then(function ({ data: { message } }) {
            return message;
        })
        .catch(function (error) {
            console.error(error);
        })
);

export const getImage = breedName => (
    axios.get(`/breed/${ breedName }/images/random`)
        .then(function ({ data: { message } }) {
            return message;
        })
        .catch(function (error) {
            console.error(error);
        })
);
