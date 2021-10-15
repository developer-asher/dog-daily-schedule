import React from 'react';
import styled from 'styled-components';

const ImageEle = ({ children, ...rest }) => {
  return <Image {...rest} />;
};

const Image = styled.img`
  width: 100%;
  ${props => (props.max_width ? `max-width: ${props.max_width};` : ``)};
  ${props => (props.width ? `width: ${props.width};` : ``)};
  ${props => (props.height ? `height: ${props.height};` : ``)};
  ${props => (props.margin ? `margin: ${props.margin};` : ``)};
`;

export default ImageEle;
