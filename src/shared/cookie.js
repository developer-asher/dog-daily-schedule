const getCookie = name => {};

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setDate(date.getDate() + exp * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value};expires='${date.toUTCString()}';`;
};

const removeCookie = name => {
  const exp = new Date().toUTCString('2020-01-01');

  document.cookie = `${name}=; expires=${exp};`;
};

export { getCookie, setCookie, removeCookie };
