import { GET_BREEDS, GET_IMAGE, SET_BREEDS, SET_IMAGE } from '../types';

export function getDogBreeds () {
    return {
        type: GET_BREEDS
    };
}

export function setDogBreeds (payload) {
    return {
        payload,
        type: SET_BREEDS
    };
}

export function getDogImage (breedName) {
    return {
        breedName,
        type: GET_IMAGE
    };
}

export function setDogImage (payload) {
    return {
        payload,
        type: SET_IMAGE
    };
}
