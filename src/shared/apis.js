import axios from 'axios';
import authHeader from './authHeader';

const instance = axios.create({
  baseURL: 'http://3.35.135.17:8080',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

const apis = {
  // 로그인
  signInPost: user_info => instance.post('/user/login', user_info),
  // 로그인체크
  signInCheck: () => instance.get('/user/login', { headers: authHeader() }),
  // 회원가입
  signUpPost: user_info => instance.post('/user/signup', user_info),
  // 전체 게시글
  getContentPost: () => instance.get('/'),
  // 게시글 추가
  addContentPost: post =>
    instance.post('/write', post, { headers: authHeader() }),
  // 이미지 업로드
  addImagePost: formdata =>
    instance.post('/write', formdata, {
      headers: authHeader(),
      'Content-Type': 'multipart/form-data',
    }),
};

export default apis;
