import { takeEvery } from 'redux-saga/effects';
import { GET_BREEDS, GET_IMAGE } from './types';
import { getBreedsList, getDogImage } from './Dogs/sagas';

function* rootSaga () {
    yield takeEvery(GET_BREEDS, getBreedsList);
    yield takeEvery(GET_IMAGE, getDogImage);
}

export default rootSaga;
