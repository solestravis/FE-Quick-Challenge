import React from 'react';
import { StyledIcon } from './styled';
import { func, string } from 'prop-types';

const Icon = ({ children, onClick }) => (
    <StyledIcon onClick={ onClick }>
        { children }
    </StyledIcon>
);

Icon.propTypes = {
    children: string,
    onClick: func
};

export default Icon;
