import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Http from '../services/Http';
import {
  initialSignin,
  initialSignup,
  signinChange,
  signupChange,
} from '../store/slices/inputSlice';
import TokenStorage, { UserStorage } from '../utils/Storage';
import useToggle from './useToggle';

const useAuth = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { authToggle, handleAuthToggle } = useToggle();
  const authService = new Http(authToggle ? 'signup' : 'signin');
  const tokenStorage = new TokenStorage();
  const setUserId = new UserStorage().setId;

  const { signin, signup } = useSelector(state => state.input);

  const handleInputInit = () => {
    if (authToggle) dispatch(signupChange(initialSignup));
    else dispatch(signinChange(initialSignin));
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
          setUserId(data.user.id);
          nav(`user/${data.user.id}`);
        },
      });
    }
    handleInputInit();
  };

  // handle Logout

  return { authData, handleAuthEvent };
};

export default useAuth;
