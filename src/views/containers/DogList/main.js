import { Container } from '../../components/Container';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import Listing from '../../components/Listing';
import Title from '../../components/Title';
import headerImg from '../../../assets/dogpattern.png';
import React, { Component, Fragment } from 'react';
import { array, func, object } from 'prop-types';

class DogList extends Component {

    static propTypes = {
        dogNames: array,
        getDogBreeds: func,
        history: object,
        saveDog: func
    }

    componentWillMount () {
        // Get list of dog breeds from dog.ceo API
        const { getDogBreeds } = this.props;
        getDogBreeds();
    }

    /**
     * Save selected breed name to the store and redirect with `history.push()`.
     * Initially I'd used `<Link to="">` from `react-router`
     * but decided it'd be better if the entire ListItem
     * element was clickable.
     */
    _handleClick = event => {
        const { history, saveDog } = this.props;
        const breed = event.currentTarget.id;
        saveDog(breed);
        history.push('/image');
    }

    render () {
        const { dogNames } = this.props;
        return (
            <Fragment>
                <Header image={ headerImg }>
                    <Title fontFamily="Lobster">Dog Breeds List</Title>
                </Header>
                <Container>
                    <Listing>
                        {
                            dogNames &&
                            dogNames.map(name =>
                                <ListItem
                                    id={ name }
                                    key={ name }
                                    onClick={ this._handleClick }
                                >
                                    { name }
                                </ListItem>
                            )
                        }
                    </Listing>
                </Container>
            </Fragment>
        );
    }

}

export default DogList;
