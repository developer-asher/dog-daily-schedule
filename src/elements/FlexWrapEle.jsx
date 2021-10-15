import React from 'react';
import styled from 'styled-components';

const FlexWrapEle = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: ${props =>
    props.align_items ? `${props.align_items};` : `center`};
  flex-direction: ${props => (props.direction ? `${props.direction};` : `row`)};
  justify-content: ${props =>
    props.justify ? `${props.justify};` : `flex-start;`};
`;

export default FlexWrapEle;
