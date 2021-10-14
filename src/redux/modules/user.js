// import { createAction, handleActions } from 'redux-actions';
// import { produce } from 'immer';
// import axios from 'axios';
// import { setCookie, removeCookie } from '../../shared/cookie';
// import apis from '../../shared/apis';

// // action type
// const GET_USER = 'GET_USER';
// const SET_USER = 'SET_USER';

// // action creator
// const getUser = createAction(GET_USER, user_info => ({ user_info }));
// const setUser = createAction(SET_USER, user_info => ({ user_info }));

// const initialState = {
//   is_login: false,
//   user_info: {},
// };

// const signinFB = (id, pwd) => {
//   return async function (dispatch, getState, { history }) {
//     console.log('로그인 미들웨어', id, pwd);

//     const user_info = {
//       username: id, // userid
//       password: pwd,
//     };

//     try {
//       const res = await apis.signInPost(user_info);

//       console.log(res);
//       console.log(res.data);
//       console.log(res.headers['set-cookie']);
//       // res.then(data => console.log(data)).catch(error => console.log(error));
//     } catch (error) {
//       console.log('로그인에 실패했습니다.', error);
//     }
//   };
// };

// const signinCheckFB = () => {
//   return async function (dispatch, getState, { history }) {
//     console.log('로그인 체크 미들웨어');

//     try {
//       const result = await apis.signInPost();

//       console.log(result);
//     } catch (error) {
//       console.log('로그인 확인에 실패했습니다.', error);
//     }
//   };
// };

// const signupFB = (id, nick_name, pwd) => {
//   return function (dispatch, getState, { history }) {
//     console.log('회원가입 미들웨어', id, nick_name, pwd);

//     const user_info = {
//       userid: id,
//       username: nick_name,
//       pwd: pwd,
//     };

//     try {
//       const result = apis.signUpPost(user_info);

//       console.log('회원가입에 성공했습니다.', result);
//     } catch (error) {
//       console.log('회원가입에 실패했습니다.', error);
//     }
//   };
// };

// export default handleActions(
//   {
//     [SET_USER]: (state, action) =>
//       produce(state, draft => {
//         draft.user_info = action.payload.user_info;
//         draft.is_login = true;
//       }),
//   },
//   initialState,
// );

// export const userActions = {
//   signinFB,
//   signinCheckFB,
//   signupFB,
// };