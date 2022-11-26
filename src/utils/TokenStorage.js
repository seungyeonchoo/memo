import { TOKEN_KEY } from '../constant/Constant';

const STORAGE = localStorage;

class TokenStorage {
  setToken = token => {
    STORAGE.setItem(TOKEN_KEY, token);
  };
  getToken = () => {
    return STORAGE.getItem(TOKEN_KEY);
  };
  removeToken = () => {
    STORAGE.removeItem(TOKEN_KEY);
  };
}

export default TokenStorage;
