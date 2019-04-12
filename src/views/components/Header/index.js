import React from 'react';
import { StyledHeader } from './styled';
import { any } from 'prop-types';

const Header = ({ children, ...props }) => (
    <StyledHeader { ...props } >
        { children }
    </StyledHeader>
);

Header.propTypes = {
    children: any
};

export default Header;
