import React from 'react';
import { StyledListItem } from './styled';
import { object, string } from 'prop-types';

const ListItem = ({ children }) => (
    <StyledListItem>
        { children }
    </StyledListItem>
);

ListItem.propTypes = {
    children: string || object
};

export default ListItem;
