const TOKEN_STORAGE = sessionStorage;
const USER_STORAGE = sessionStorage;

class TokenStorage {
  setToken = token => {
    TOKEN_STORAGE.setItem('ACCESS_TOKEN', token);
  };
  getToken = () => {
    return TOKEN_STORAGE.getItem('ACCESS_TOKEN');
  };
  removeToken = () => {
    TOKEN_STORAGE.removeItem('ACCESS_TOKEN');
  };
}

export class UserStorage {
  setId = info => {
    USER_STORAGE.setItem('user_id', info);
  };
  setName = info => {
    USER_STORAGE.setItem('user_name', info);
  };
  getId = () => {
    return USER_STORAGE.getItem('user_id');
  };
  getName = () => {
    return USER_STORAGE.getItem('user_name');
  };
  removeId = () => {
    USER_STORAGE.removeItem('user_id');
  };
}

export const user_id = new UserStorage().getId();

export default TokenStorage;
