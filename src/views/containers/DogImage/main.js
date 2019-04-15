import { Container } from '../../components/Container';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import Image from '../../components/Image';
import LoadingSpinner from '../../../assets/spinner.gif';
import Title from '../../components/Title';
import headerImg from '../../../assets/dogpattern.png';
import React, { Component, Fragment } from 'react';
import { func, object, string } from 'prop-types';

class DogImage extends Component {

    static propTypes = {
        getDogImage: func,
        history: object,
        match: object,
        setDogImage: func,
        url: string
    }

    componentWillMount () {
        // Generate a new image url before mounting
        const { getDogImage, match: { params: { breed } } } = this.props;
        getDogImage(breed);
    }

    componentWillUnmount () {
        // Get rid of image url before unmounting
        const { setDogImage } = this.props;
        setDogImage('');
    }

    _handleClickHistory = () => {
        // Go to previous page
        const { history } = this.props;
        history.goBack();
    }

    render () {
        const { match: { params: { breed } }, url } = this.props;
        return (
            <Fragment>
                <Header image={ headerImg }>
                    <Icon onClick={ this._handleClickHistory }>&larr; GO BACK</Icon>
                    <Title>{ breed.toUpperCase() }</Title>
                </Header>
                <Container>
                    {
                        url ?
                            <Image alt={ breed } src={ url } />
                            :
                            <Image alt="Loading" src={ LoadingSpinner } />
                    }
                </Container>
            </Fragment>
        );
    }

}

export default DogImage;
