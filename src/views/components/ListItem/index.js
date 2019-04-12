import React from 'react';
import { StyledListItem } from './styled';
import { func, string } from 'prop-types';

const ListItem = ({ children, id, onClick }) => (
    <StyledListItem id={ id } onClick={ onClick }>
        { children }
    </StyledListItem>
);

ListItem.propTypes = {
    children: string,
    id: string.isRequired,
    onClick: func
};

export default ListItem;
