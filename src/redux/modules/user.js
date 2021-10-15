import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { setCookie, removeCookie } from '../../shared/cookie';
import apis from '../../shared/apis';
import { getToken, setToken, removeToken } from '../../shared/token';

// action type
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';

// action creator
const setUser = createAction(SET_USER, info => ({ info }));
const login = createAction(LOGIN, userid => ({ userid }));
const logout = createAction(LOGOUT, info => ({ info }));

const initialState = {
  is_login: false,
  info: {},
};

const signinDB = (id, pwd) => {
  return async function (dispatch, getState, { history }) {
    //
    console.log('로그인 미들웨어');

    const user_info = {
      userid: id, // userid
      pwd: pwd,
    };

    try {
      const res = await apis.signInPost(user_info);
      const data = res.data;

      // 토큰 받아올때 유저 정보도 같이 받아야함.
      setToken(data.token);
      // 임의로 로그인 유지를 위해 userid에 id 값 할당
      dispatch(setUser({ userid: id }));
      history.replace('/');
    } catch (error) {
      console.log('로그인에 실패했습니다.', error);
    }
  };
};

const signinCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    //
    console.log('로그인 체크 미들웨어');

    // try {
    //   const result = await apis.signInCheck();

    //   // 로그인 체크 시 토큰에 맞는 유저 정보 받아야함
    //   console.log(result);
    //   // dispatch(setUser(user_info));
    // } catch (error) {
    //   console.log('로그인 확인에 실패했습니다.', error);
    // }
  };
};

const signupDB = (id, nick_name, pwd) => {
  return function (dispatch, getState, { history }) {
    //
    console.log('회원가입 미들웨어');

    const user_info = {
      userid: id,
      username: nick_name,
      pwd: pwd,
    };

    try {
      const result = apis.signUpPost(user_info);

      console.log('회원가입에 성공했습니다.', result);
      history.replace('/signin');
    } catch (error) {
      console.log('회원가입에 실패했습니다.', error);
    }
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        setCookie('is_login', true);
        localStorage.setItem('userid', action.payload.info?.userid);

        draft.info = action.payload.info;
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, draft => {
        removeCookie('is_login');
        removeToken('auth');

        localStorage.removeItem('userid');

        draft.is_login = false;
        draft.info = null;
      }),
    [LOGIN]: (state, action) =>
      produce(state, draft => {
        draft.is_login = true;
        draft.info = action.payload.userid;
      }),
  },
  initialState,
);

export const userActions = {
  signinDB,
  signinCheckDB,
  signupDB,
  login,
  logout,
};
