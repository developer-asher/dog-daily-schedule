import React from 'react';
import styled from 'styled-components';

const LabelEle = ({ children, ...rest }) => {
  return <Label {...rest}>{children}</Label>;
};

const Label = styled.label`
  ${props => (props.hidden ? `position:absolute; left:-9999em;` : '')};
`;

export default LabelEle;
