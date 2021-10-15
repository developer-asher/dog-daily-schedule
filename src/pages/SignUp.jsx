import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CheckIcon from '@mui/icons-material/Check';

import { userActions } from '../redux/modules/user';
import ButtonEle from '../elements/ButtonEle';
import InputEle from '../elements/InputEle';
import LabelEle from '../elements/LabelEle';

// icon style
const icon_login = {
  position: 'absolute',
  left: '5px',
  top: 'calc(50% + 9px)',
  transform: 'translateY(-50%)',
  color: '#555',
};
// btn style
const btn_login = {
  width: '100%',
  marginTop: '40px',
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: '',
    nick_name: '',
    pwd: '',
    pwd_check: '',
  });
  const { id, nick_name, pwd, pwd_check } = input;

  const handleChange = e => {
    const { value, name } = e.target; //event target name

    setInput({
      ...input,
      [name]: value,
    });
  };
  const signUp = e => {
    e.preventDefault();

    if (pwd !== pwd_check) {
      alert('비밀번호를 확인해주세요.');
      return false;
    }

    dispatch(userActions.signupDB(id, nick_name, pwd));
    setInput({
      id: '',
      nick_name: '',
      pwd: '',
      pwd_check: '',
    });
  };

  return (
    <SignBox>
      <SignTitle>멍일과</SignTitle>
      <SignupForm>
        <InputBox>
          <PersonOutlineIcon style={icon_login} />
          <LabelEle htmlFor='id'>아이디</LabelEle>
          <InputEle
            name='id'
            value={id}
            type='text'
            id='id'
            placeholder='아이디를 입력해주세요.'
            onChange={handleChange}
          />
        </InputBox>
        <InputBox>
          <CheckIcon style={icon_login} />
          <LabelEle htmlFor='nick_name'>닉네임</LabelEle>
          <InputEle
            name='nick_name'
            value={nick_name}
            type='text'
            id='nick_name'
            placeholder='닉네임을 입력해주세요.'
            onChange={handleChange}
          />
        </InputBox>
        <InputBox>
          <LockOpenIcon style={icon_login} />
          <LabelEle htmlFor='pwd'>비밀번호</LabelEle>
          <InputEle
            name='pwd'
            value={pwd}
            type='password'
            id='pwd'
            placeholder='비밀번호를 입력해주세요.'
            onChange={handleChange}
          />
        </InputBox>
        <InputBox>
          <LockOpenIcon style={icon_login} />
          <LabelEle htmlFor='pwd_check'>비밀번호 확인</LabelEle>
          <InputEle
            name='pwd_check'
            value={pwd_check}
            type='password'
            id='pwd_check'
            placeholder='비밀번호 확인해주세요.'
            onChange={handleChange}
          />
        </InputBox>
        <ButtonEle onClick={signUp} style={btn_login}>
          회원가입
        </ButtonEle>
      </SignupForm>
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

const SignupForm = styled.form`
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InputBox = styled.p`
  position: relative;
  margin: 0 0 20px 0;

  & > input {
    width: 100%;
    border: 1px solid #ccc;
    padding-left: 30px;
    outline-color: #9dc8f1;
    font-size: 15px;
  }
`;

export default SignUp;
