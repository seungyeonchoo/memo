import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Http from '../services/Http';
import { signinChange, signupChange } from '../store/slices/inputSlice';
import InputUtils from '../utils/InputUtils';
import TokenStorage, { UserStorage } from '../utils/Storage';
import useToggle from './useToggle';

const useAuth = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { authToggle, handleToggle: handleAuthToggle } = useToggle('auth');
  const authService = new Http(authToggle ? 'signup' : 'signin');
  const tokenStorage = new TokenStorage();
  const userStorage = new UserStorage();

  const { signin, signup } = useSelector(state => state.input);

  const handleInputInit = () => {
    if (authToggle) dispatch(signupChange(InputUtils.initialSignup));
    else dispatch(signinChange(InputUtils.initialSignin));
  };

  // handle login / signup

  const { mutate: handleAuth, data: authData } = useMutation(authService.post);

  const handleAuthEvent = () => {
    if (authToggle) {
      const signupInput = { ...signup, password_confirm: true };
      handleAuth(signupInput, {
        onSuccess: () => {
          handleAuthToggle();
        },
      });
    }
    if (!authToggle) {
      handleAuth(signin, {
        onSuccess: data => {
          tokenStorage.setToken(data.accessToken);
          userStorage.setId(data.user.id);
          nav(`users/${data.user.id}`);
        },
      });
    }
    handleInputInit();
  };

  // handle Logout

  const handleLogOut = () => {
    queryClient.invalidateQueries();
    tokenStorage.removeToken();
    userStorage.removeId();
    nav('/');
  };

  return { authData, handleAuthEvent, handleLogOut };
};

export default useAuth;
