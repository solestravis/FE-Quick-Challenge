import styled from 'styled-components';

export const StyledTitle = styled.h4`
    background-color: #fff;
    border-radius: 5rem;
    color: #fff;
    font-family: ${ ({ fontFamily }) => fontFamily ? fontFamily : 'inherit' }, cursive;
    font-size: 10vmin;
    font-weight: 500;
    padding: 0.5rem;
    -webkit-text-stroke: 0.4vmin #d6402c;
`;
