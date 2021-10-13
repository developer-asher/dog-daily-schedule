import React from 'react';
import styled from 'styled-components';

const InputEle = ({ ...rest }) => {
  return <Input {...rest} />;
};

const Input = styled.input`
  border-radius: 10px;
  padding: 10px 5px;
  font-size: 14px;
  &:focus {
    border: 6px solid #FCE38A;
  }
`;

export default InputEle;
