import React from 'react';
import styled from 'styled-components';

const ImageEle = ({ children, ...rest }) => {
  return <Image {...rest} />;
};

const Image = styled.img`
  width: 100%;
`;

export default ImageEle;