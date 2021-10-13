import React from 'react';
import styled from 'styled-components';

const FlexWrapEle = ({ children, ...rest }) => {
  console.log({ ...rest });
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${props =>
    props.direction === 'column'
      ? `flex-direction: column`
      : `flex-direction: row`};
  ${props =>
    props.spaceType === 'between'
      ? 'justify-content: space-between'
      : 'justify-content: flex-start'};
`;

export default FlexWrapEle;
