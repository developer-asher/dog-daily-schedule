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
  // 회원가입
  signInPost: user_info => instance.post('/user/login', user_info),
  signInCheck: () => instance.get('/user/login', { headers: authHeader() }),
  signUpPost: user_info => instance.post('/user/signup', user_info),

  // 게시글
  getContentPost: () => instance.get('/'),
  addContentPost: post =>
    instance.post('/write', post, { headers: authHeader() }),
  deleteContentPost: post_id =>
    instance.delete(`/edit/${post_id}`, { headers: authHeader() }),

  // 이미지 업로드
  addImagePost: formdata =>
    instance.post('/write', formdata, {
      headers: authHeader(),
      'Content-Type': 'multipart/form-data',
    }),
};

export default apis;
