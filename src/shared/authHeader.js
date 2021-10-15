export default function authHeader() {
  const token = sessionStorage.getItem('auth');

  if (token) {
    return {
      'X-AUTH-TOKEN': token,
    };
  } else {
    return {};
  }
}
