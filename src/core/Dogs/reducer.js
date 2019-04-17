import ErrorImg from '../../assets/error.png';
import { SET_BREEDS, SET_IMAGE, SHOW_ERROR } from '../types';

const defaultState = () => ({
    dogNames: [],
    error: false,
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
    case SHOW_ERROR:
        return {
            ...state,
            error: true,
            url: ErrorImg
        };
    default:
        return state;
    }
}
