import DogImage from './main';

import { connect } from 'react-redux';
import { dogsErrorSelector, dogsImageSelector } from 'core/Dogs/selector';
import { getDogImage, setDogImage } from 'core/Dogs/action';

function mapStateToProps (state) {
    return {
        error: dogsErrorSelector(state),
        url: dogsImageSelector(state)
    };
}

const mapDispatchToProps = { getDogImage, setDogImage };

export default connect(mapStateToProps, mapDispatchToProps)(DogImage);
