import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import ButtonEle from '../elements/ButtonEle';
import InputEle from '../elements/InputEle';
import LabelEle from '../elements/LabelEle';
import { userActions } from '../redux/modules/user';

// icon style
const icon_login = {
  position: 'absolute',
  left: '5px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#555',
};
// btn style
const btn_login = {
  width: '100%',
  marginTop: '40px',
};

const SignIn = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const [input, setInput] = useState({ id: '', pwd: '' });
  const { id, pwd } = input;

  const handleChange = e => {
    const { value, name } = e.target; //event target name

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleClick = e => {
    e.preventDefault();

    if (e.target.textContent === '로그인') {
      dispatch(userActions.signinDB(id, pwd));
      setInput({
        id: '',
        pwd: '',
      });
    }

    if (e.target.textContent === '회원가입') {
      history.push('/signup');
    }
  };

  return (
    <SignBox>
      <SignTitle>멍일과</SignTitle>
      <SigninForm>
        <InputBox>
          <PersonOutlineIcon style={icon_login} />
          <LabelEle hidden htmlFor='id'>
            아이디
          </LabelEle>
          <InputEle
            id='id'
            name='id'
            value={id}
            type='text'
            placeholder='아이디'
            onChange={handleChange}
          />
        </InputBox>
        <InputBox>
          <LockOpenIcon style={icon_login} />
          <LabelEle hidden htmlFor='pwd'>
            비밀번호
          </LabelEle>
          <InputEle
            id='pwd'
            name='pwd'
            value={pwd}
            type='password'
            placeholder='비밀번호'
            onChange={handleChange}
          />
        </InputBox>
        <ButtonWrap onClick={handleClick}>
          <ButtonEle style={btn_login}>로그인</ButtonEle>
          <ButtonEle style={{ ...btn_login, marginTop: '5px' }}>
            회원가입
          </ButtonEle>
        </ButtonWrap>
      </SigninForm>
    </SignBox>
  );
};

const SignBox = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 400px;
  min-height: 250px;
  transform: translateX(-50%) translateY(-50%);
`;

const SignTitle = styled.h2`
  text-align: center;
  font-family: 'Gugi', cursive;
  font-size: 30px;
  color: #9dc8f1;
`;

const SigninForm = styled.form`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 2px 6px 0 rgb(68 68 68 / 8%);
`;

const InputBox = styled.p`
  position: relative;
  margin: 0;

  & > input {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0 0 5px 5px;
    padding-left: 30px;
    outline-color: #9dc8f1;
    font-size: 15px;
  }

  &:first-child > input {
    border-bottom: none;
    border-radius: 5px 5px 0 0;
  }
`;

const ButtonWrap = styled.div``;

export default SignIn;
