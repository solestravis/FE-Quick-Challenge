import React from 'react';
import { StyledListing } from './styled';
import { array } from 'prop-types';

const Listing = ({ children }) => (
    <StyledListing>
        { children }
    </StyledListing>
);

Listing.propTypes = {
    children: array
};

export default Listing;
