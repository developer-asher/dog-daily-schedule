import React from 'react';
import styled from 'styled-components';

const ImageEle = ({ children, ...rest }) => {
  return <Image {...rest} />;
};

const Image = styled.img`
  transition: .8s;
  border-radius: 50px 50px 0px 50px;
  width: 100%;
  &:hover{ 
  border-radius: 0px 0px 0px 0px;
  }
`;

export default ImageEle;
