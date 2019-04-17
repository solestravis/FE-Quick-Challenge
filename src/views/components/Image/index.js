import { StyledImage } from './styled';
import { string } from 'prop-types';
import React, { Fragment } from 'react';

const Image = ({ text, ...props }) => (
    <Fragment>
        <StyledImage { ... props } />
        <h4 style={{ textAlign: 'center' }}>{ text }</h4>
    </Fragment>
);

Image.propTypes = {
    text: string
};

export default Image;
