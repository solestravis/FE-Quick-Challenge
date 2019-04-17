import { call, put } from 'redux-saga/effects';
import { getDogs, getImage } from './services';
import { setDogBreeds, setDogImage, showError } from './action';

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
 * @param {string} breedName asdaasd
 */
export function* getDogImage ({ breedName }) {
    try {
        const data = yield call(getImage, breedName);
        data ? yield put(setDogImage(data)) : yield put(showError());
    } catch (e) {
        console.error(e);
    }
}
