import { Container } from '../../components/Container';
import Header from '../../components/Header';
import Link from '../../components/Link';
import ListItem from '../../components/ListItem';
import Listing from '../../components/Listing';
import Title from '../../components/Title';
import headerImg from '../../../assets/dogpattern.png';
import React, { Component, Fragment } from 'react';
import { array, func } from 'prop-types';

class DogList extends Component {

    static propTypes = {
        dogNames: array,
        getDogBreeds: func
    }

    componentWillMount () {
        // Get list of dog breeds from dog.ceo API
        const { getDogBreeds } = this.props;
        getDogBreeds();
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
                                <Link key={ name } to={ `/image/${ name }` }>
                                    <ListItem>
                                        { name }
                                    </ListItem>
                                </Link>
                            )
                        }
                    </Listing>
                </Container>
            </Fragment>
        );
    }

}

export default DogList;
