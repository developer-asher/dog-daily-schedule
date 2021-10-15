import React from 'react';
import styled from 'styled-components';

const InputEle = ({ ...rest }) => {
  return <Input {...rest} />;
};

const Input = styled.input`
  padding: 15px 5px;
  font-size: 14px;
`;

export default InputEle;
