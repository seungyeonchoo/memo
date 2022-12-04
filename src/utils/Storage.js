import { TOKEN_KEY } from './constant';

const TOKEN_STORAGE = localStorage;
const USER_STORAGE = sessionStorage;

class TokenStorage {
  setToken = token => {
    TOKEN_STORAGE.setItem(TOKEN_KEY, token);
  };
  getToken = () => {
    return TOKEN_STORAGE.getItem(TOKEN_KEY);
  };
  removeToken = () => {
    TOKEN_STORAGE.removeItem(TOKEN_KEY);
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
    USER_STORAGE.getItem('user_id');
  };
  getName = () => {
    USER_STORAGE.getItem('user_name');
  };
}

export default TokenStorage;
