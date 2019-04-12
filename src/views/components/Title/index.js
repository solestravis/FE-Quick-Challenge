import React from 'react';
import { StyledTitle } from './styled';
import { string } from 'prop-types';

const Title = ({ children, ...props }) => (
    <StyledTitle { ...props }>
        { children }
    </StyledTitle>
);

Title.propTypes = {
    children: string
};

export default Title;
