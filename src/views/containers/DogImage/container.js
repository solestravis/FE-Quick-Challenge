import DogImage from './main';

import { connect } from 'react-redux';
import { dogsBreedSelector, dogsImageSelector } from 'core/Dogs/selector';
import { getDogImage, setDogImage } from 'core/Dogs/action';

function mapStateToProps (state) {
    return {
        breed: dogsBreedSelector(state),
        url: dogsImageSelector(state)
    };
}

const mapDispatchToProps = { getDogImage, setDogImage };

export default connect(mapStateToProps, mapDispatchToProps)(DogImage);
