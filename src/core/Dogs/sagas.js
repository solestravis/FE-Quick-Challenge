import { call, put } from 'redux-saga/effects';
import { getDogs, getImage } from './services';
import { saveDog, setDogBreeds, setDogImage } from './action';

/**
 * Save selected dog to localStorage and continue action dispatch
 * @param payload: string
 */
export function* setLocalStorage ({ payload }) {
    try {
        const breedName = JSON.stringify(payload);
        localStorage.setItem('name', breedName);
        yield call(saveDog);
    } catch (e) {
        console.error(e);
    }
}

/**
 * Call API to retrieve dogs' list and dispatch a new action
 */
export function* getBreedsList () {
    try {
        const data = yield call(getDogs);
        yield put(setDogBreeds(data));
    } catch (e) {
        console.error(e);
    }
}

/**
 * Call API to generate image url and dispatch a new action
 * @param breedName: string
 */
export function* getDogImage ({ breedName }) {
    try {
        const data = yield call(getImage, breedName);
        yield put(setDogImage(data));
    } catch (e) {
        console.error(e);
    }
}
