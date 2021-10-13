import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.35.135.17:8080',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

const apis = {
  // 로그인
  signInPost: user_info =>
    instance.post('/user/login', user_info, { withCredentials: true }),
  // 회원가입
  signUpPost: user_info =>
    instance.post('/user/signup', user_info, { withCreadentials: true }),
};

export default apis;
