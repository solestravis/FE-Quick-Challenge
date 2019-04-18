import { StyledImage } from './styled';
import React, { Fragment } from 'react';

const Image = ({ ...props }) => (
    <Fragment>
        <StyledImage { ... props } />
    </Fragment>
);

export default Image;
