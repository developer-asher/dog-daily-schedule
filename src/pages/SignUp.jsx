import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../redux/modules/user';

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

    dispatch(userActions.signupFB(id, nick_name, pwd));
    setInput({
      id: '',
      nick_name: '',
      pwd: '',
      pwd_check: '',
    });
  };

  return (
    <>
      <form>
        <p>
          <label htmlFor='id'>아이디</label>
          <input
            name='id'
            value={id}
            type='text'
            id='id'
            placeholder='아이디를 입력해주세요.'
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor='nick_name'>닉네임</label>
          <input
            name='nick_name'
            value={nick_name}
            type='text'
            id='nick_name'
            placeholder='닉네임을 입력해주세요.'
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor='pwd'>비밀번호</label>
          <input
            name='pwd'
            value={pwd}
            type='password'
            id='pwd'
            placeholder='비밀번호를 입력해주세요.'
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor='pwd_check'>비밀번호 확인</label>
          <input
            name='pwd_check'
            value={pwd_check}
            type='password'
            id='pwd_check'
            placeholder='비밀번호 확인해주세요.'
            onChange={handleChange}
          />
        </p>
        <button onClick={signUp}>회원가입</button>
      </form>
    </>
  );
};

export default SignUp;
