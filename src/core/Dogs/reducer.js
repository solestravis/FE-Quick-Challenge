import { SET_BREEDS, SET_IMAGE } from '../types';

const defaultState = () => ({
    dogNames: [],
    url: ''
});

export function dogsReducer (state = defaultState(), { type, payload }) {
    switch (type) {
    case SET_BREEDS:
        return {
            ...state,
            dogNames: payload
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
