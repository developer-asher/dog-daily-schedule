import React from 'react';

import styled from 'styled-components';

const LinkEle = ({ children, ...rest }) => {
  return (
    <>
      <Link href='#' {...rest}>
        {children}
      </Link>
    </>
  );
};

const Link = styled.a`
  color: #333;
  text-decoration: none;
  ${props => (props.color ? `color: ${props.color};` : ``)}
  ${props => (props.size ? `font-size: ${props.size};` : ``)}
`;

export default LinkEle;
