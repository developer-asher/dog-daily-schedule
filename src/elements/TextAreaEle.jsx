import React from 'react';
import styled from 'styled-components';

const TextAreaEle = ({ children, ...rest }) => {
  return <TextArea {...rest}></TextArea>;
};

const TextArea = styled.textarea`
  width: 100%;
`;

export default TextAreaEle;
