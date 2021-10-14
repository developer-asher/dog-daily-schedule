import React from 'react';
import styled from 'styled-components';

const ImageEle = ({ children, ...rest }) => {
  return <Image {...rest} />;
};

const Image = styled.img`
margin: 30px 0px;
  background-color: blue;
  height: 380px;
  width: 80%;
  min-width: 330px;
  max-width: 450px;
`;

export default ImageEle;