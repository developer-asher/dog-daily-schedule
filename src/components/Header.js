import React from 'react'
import styled from "styled-components";


const Header = (props) => {
  return (
    <React.Fragment>
      <HeaderBox>
        <TitleWrap>
          <Log/>
        </TitleWrap>
      </HeaderBox>
    </React.Fragment>
  )
}

const HeaderBox = styled.div`
  position: sticky;
  top: 0;
  height: 70px;
  background-color: green;
`;

const TitleWrap = styled.div`

`;
const Log = styled.img`
  height: 70px;
  width: 70px;
  background-image: url("./feet-ge22447d2b_640.png");
`;

export default Header;
