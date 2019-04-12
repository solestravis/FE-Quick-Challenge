import { getNameLocalStorage } from '../utils';
import { SAVE_DOG, SET_BREEDS, SET_IMAGE } from '../types';

const defaultState = () => ({
    dogNames: [],
    // Load name from localStorage if available:
    selectedBreed: getNameLocalStorage(),
    url: ''
});

export function dogsReducer (state = defaultState(), { type, payload }) {
    switch (type) {
    case SET_BREEDS:
        return {
            ...state,
            dogNames: payload
        };
    case SAVE_DOG:
        return {
            ...state,
            selectedBreed: payload
        };
    case SET_IMAGE:
        return {
            ...state,
            url: payload
        };
    default:
        return state;
    }
}
