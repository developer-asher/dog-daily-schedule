import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '../redux/modules/user';

const SignIn = props => {
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

  const signIn = e => {
    e.preventDefault();

    dispatch(userActions.signinFB(id, pwd));
    setInput({
      id: '',
      pwd: '',
    });
  };

  return (
    <>
      <form>
        <p>
          <label htmlFor=''>아이디</label>
          <input
            name='id'
            value={id}
            type='text'
            placeholder='id'
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor=''>비밀번호</label>
          <input
            name='pwd'
            value={pwd}
            type='password'
            placeholder='password'
            onChange={handleChange}
          />
        </p>
        <button onClick={signIn}>로그인</button>
      </form>
    </>
  );
};

export default SignIn;
