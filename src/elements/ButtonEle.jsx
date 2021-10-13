import React from 'react';
import styled from 'styled-components';

const ButtonEle = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

const Button = styled.button`
  border: none;
  border-radius: 25px;
  padding: 10px 15px;
  background-color: #95E1D3;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #208be6;
  }
`;

export default ButtonEle;
