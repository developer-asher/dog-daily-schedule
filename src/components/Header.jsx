import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { userActions } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import ButtonEle from '../elements/ButtonEle';
import LinkEle from '../elements/LinkEle';
import FlexWrapEle from '../elements/FlexWrapEle';
import { useDispatch } from 'react-redux';

const Header = props => {
  const dispatch = useDispatch();
  const is_login = useSelector(state => state.user.is_login);

  const handleClick = e => {
    const text = e.target.textContent;
    e.preventDefault();

    if (text === '멍일과') {
      history.push('/');
    }

    if (text === '로그인') {
      history.push('/signin');
    }

    if (text === '회원가입') {
      history.push('/signup');
    }

    if (text === '내정보') {
      history.push('/signup');
    }

    if (text === '로그아웃') {
      dispatch(userActions.logout());
      history.push('/signin');
    }
  };

  return (
    <HeaderBox>
      <FlexWrapEle //
        flex
        justify='space-between'
      >
        <Logo>
          <LinkEle //
            onClick={handleClick}
            color='#9dc8f1'
            size='30px'
          >
            멍일과
          </LinkEle>
        </Logo>
        {is_login ? (
          <ButtonWrap>
            <ButtonList>
              <ButtonEle onClick={handleClick}>로그아웃</ButtonEle>
            </ButtonList>
          </ButtonWrap>
        ) : (
          <ButtonWrap>
            <ButtonList className='btn_wrap'>
              <ButtonEle onClick={handleClick}>로그인</ButtonEle>
            </ButtonList>
            <ButtonList>
              <ButtonEle onClick={handleClick}>회원가입</ButtonEle>
            </ButtonList>
          </ButtonWrap>
        )}
      </FlexWrapEle>
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  margin: 20px 0 40px 0;
`;

const Logo = styled.h1`
  margin: 0;
  font-family: 'Gugi', cursive;
`;
const ButtonWrap = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 0;
  list-style: none;

  > li:first-child {
    margin-right: 15px;
  }
`;
const ButtonList = styled.li``;

export default Header;
