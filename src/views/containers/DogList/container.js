import DogList from './main';

import { connect } from 'react-redux';
import { dogsBreedSelector, dogsListSelector } from 'core/Dogs/selector';
import { getDogBreeds, saveDog } from 'core/Dogs/action';

function mapStateToProps (state) {
    return {
        breed: dogsBreedSelector(state),
        dogNames: dogsListSelector(state)
    };
}

const mapDispatchToProps = { getDogBreeds, saveDog };

export default connect(mapStateToProps, mapDispatchToProps)(DogList);
