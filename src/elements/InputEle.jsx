import React from 'react';
import styled from 'styled-components';

const InputEle = ({ ...rest }) => {
  return <Input {...rest} />;
};

const Input = styled.input`
  ${props => (props.margin ? `margin: ${props.margin};` : ``)};
  ${props =>
    props.border_style ? `border-style: ${props.border_style};` : ``};
  padding: ${props => (props.padding ? `${props.padding};` : `15px 5px`)};
  font-size: 14px;
  ${props => (props.outline ? `outline: ${props.outline};` : ``)};
`;

export default InputEle;
