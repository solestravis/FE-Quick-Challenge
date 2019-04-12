import { GET_BREEDS, GET_IMAGE, SAVE_DOG, SET_BREEDS, SET_IMAGE } from '../types';

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

export function saveDog (payload) {
    return {
        payload,
        type: SAVE_DOG
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
