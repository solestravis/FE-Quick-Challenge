import { createSelector } from 'reselect';

const dogsSelector = store => store.dogs.dogNames;
const breedSelector = store => store.dogs.selectedBreed;
const imageSelector = store => store.dogs.url;
const errorSelector = store => store.dogs.error;

export const dogsListSelector = createSelector(
    dogsSelector,
    dogs => dogs
);

export const dogsImageSelector = createSelector(
    imageSelector,
    url => url
);

export const dogsBreedSelector = createSelector(
    breedSelector,
    breed => breed
);

export const dogsErrorSelector = createSelector(
    errorSelector,
    error => error
);
