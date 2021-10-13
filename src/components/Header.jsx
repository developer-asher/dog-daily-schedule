import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { history } from '../redux/configureStore';
import FlexWrapEle from '../elements/FlexWrapEle';

const Header = props => {
  const handleClick = e => {
    const class_name = e.target.className;
    e.preventDefault();

    if (class_name === 'logo') {
      history.push('/');
    }

    if (class_name === 'signin') {
      history.push('/signin');
    }

    if (class_name === 'signup') {
      history.push('/signup');
    }
  };

  return (
    <FlexWrapEle>
      <Logo>
        <a className='logo' href='#' onClick={handleClick}>
          logo
        </a>
      </Logo>
      <ButtonWrap>
        <li className='btn_wrap'>
          <button className='signin' onClick={handleClick}>
            로그인
          </button>
        </li>
        <li>
          <button className='signup' onClick={handleClick}>
            회원가입
          </button>
        </li>
      </ButtonWrap>
    </FlexWrapEle>
  );
};

const Logo = styled.h1``;
const ButtonWrap = styled.ul`
  padding-left: 0;
  list-style: none;
`;
export default Header;
