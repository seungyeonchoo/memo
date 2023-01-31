import { useNavigate } from 'react-router-dom';
import TokenStorage, { UserStorage } from '../utils/Storage';

const useAuth = () => {
  const nav = useNavigate();
  const tokenStorage = new TokenStorage();
  const userStorage = new UserStorage();

  // handle Logout => profile component로 빼고 useAuth 삭제

  const handleLogOut = () => {
    tokenStorage.removeToken();
    userStorage.removeId();
    nav('/');
  };

  return { handleLogOut };
};

export default useAuth;
