import { TOKEN_KEY } from './constant';

const STORAGE = sessionStorage;

class Storage {
  static setToken = token => {
    STORAGE.setItem(TOKEN_KEY, token);
  };
  static getToken = () => {
    return STORAGE.getItem(TOKEN_KEY);
  };
  static removeToken = () => {
    STORAGE.removeItem(TOKEN_KEY);
  };
  static setId = info => {
    STORAGE.setItem('user_id', info);
  };
  static setName = info => {
    STORAGE.setItem('user_name', info);
  };
  static getId = () => {
    return STORAGE.getItem('user_id');
  };
  static getName = () => {
    return STORAGE.getItem('user_name');
  };
  static removeId = () => {
    STORAGE.removeItem('user_id');
  };
}

export default Storage;
