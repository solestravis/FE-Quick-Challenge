import { takeEvery } from 'redux-saga/effects';
import { GET_BREEDS, GET_IMAGE, SAVE_DOG } from './types';
import { getBreedsList, getDogImage, setLocalStorage } from './Dogs/sagas';

function* rootSaga () {
    yield takeEvery(SAVE_DOG, setLocalStorage);
    yield takeEvery(GET_BREEDS, getBreedsList);
    yield takeEvery(GET_IMAGE, getDogImage);
}

export default rootSaga;
