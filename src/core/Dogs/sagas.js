import { call, put } from 'redux-saga/effects';
import { getDogs, getImage } from './services';
import { setDogBreeds, setDogImage } from './action';

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
