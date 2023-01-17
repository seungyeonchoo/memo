const STORAGE = sessionStorage;

class Storage {
  static setToken = token => {
    STORAGE.setItem('ACCESS_TOKEN', token);
  };
  static getToken = () => {
    return STORAGE.getItem('ACCESS_TOKEN');
  };
  static removeToken = () => {
    STORAGE.removeItem('ACCESS_TOKEN');
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
