import styled from 'styled-components';

/**
 * `text-align: center` would be redundant
 * if iOS devices could read `display: flex`
 */

export const StyledHeader = styled.div`
    align-items: center;
    background: ${ ({ image }) => image ? `url(${ image })` : '#e8e8e8' };
    display: flex;
    height: 30vh;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: hidden;
    text-align: center;
    width: 100%;
`;
