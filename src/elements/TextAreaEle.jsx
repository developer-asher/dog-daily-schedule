import React from 'react';
import styled from 'styled-components';

const TextAreaEle = ({ children, ...rest }) => {
  return <TextArea {...rest}></TextArea>;
};

const TextArea = styled.textarea`
  width: 100%;
  ${props => (props.padding ? `padding:10px;` : ``)}
`;

export default TextAreaEle;
