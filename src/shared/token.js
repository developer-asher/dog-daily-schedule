const getToken = () => {
  return sessionStorage.getItem('auth');
};

const setToken = token => {
  sessionStorage.setItem('auth', token);
};

const removeToken = name => {
  sessionStorage.removeItem(name);
};

export { getToken, setToken, removeToken };
