import React from 'react';
import { StyledLink } from './styled';
import { object } from 'prop-types';

const Link = ({ children, ...props }) => (
    <StyledLink { ...props }>{ children }</StyledLink>
);

Link.propTypes = {
    children: object
};

export default Link;
