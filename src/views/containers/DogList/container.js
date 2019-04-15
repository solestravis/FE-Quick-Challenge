import DogList from './main';

import { connect } from 'react-redux';
import { dogsListSelector } from 'core/Dogs/selector';
import { getDogBreeds } from 'core/Dogs/action';

function mapStateToProps (state) {
    return {
        dogNames: dogsListSelector(state)
    };
}

const mapDispatchToProps = { getDogBreeds };

export default connect(mapStateToProps, mapDispatchToProps)(DogList);
