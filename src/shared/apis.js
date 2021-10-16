import axios from 'axios';
import authHeader from './authHeader';

const instance = axios.create({
  baseURL: 'http://3.35.135.17:8080',
  // baseURL: 'http://withoh.shop',
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

  // 댓글

  getCommentPost: post_id =>
    instance.get(`/detail/${post_id}`, {
      headers: authHeader(),
    }),
  addCommentPost: (comment_data, post_id) =>
    instance.post(`/detail/${post_id}`, comment_data, {
      headers: authHeader(),
    }),
  deleteCommentPost: (post_id, comment_id) =>
    instance.delete(`/detail/${comment_id}`, post_id, {
      headers: authHeader(),
    }),
  editCommentPost: (comment_data, comment_id) =>
    instance.post(`/detail/${comment_id}`, comment_data, {
      headers: authHeader(),
    }),
};

export default apis;
