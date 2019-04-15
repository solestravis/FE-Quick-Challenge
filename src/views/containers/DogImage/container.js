import DogImage from './main';

import { connect } from 'react-redux';
import { dogsImageSelector } from 'core/Dogs/selector';
import { getDogImage, setDogImage } from 'core/Dogs/action';

function mapStateToProps (state) {
    return {
        url: dogsImageSelector(state)
    };
}

const mapDispatchToProps = { getDogImage, setDogImage };

export default connect(mapStateToProps, mapDispatchToProps)(DogImage);
