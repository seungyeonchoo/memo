import { useMutation } from 'react-query';
import Http from '../services/Http';
import TokenStorage from '../utils/TokenStorage';
import useInput from './useInput';
import useToggle from './useToggle';

const useAuth = () => {
  const { authToggle, handleAuthToggle } = useToggle();
  const { signin, signup, handleInputInit } = useInput();

  const authService = new Http(authToggle ? 'signup' : 'signin');
  const tokenStorage = new TokenStorage();
  let nowLogin;

  const { mutate } = useMutation(authService.post);

  const handleAuthEvent = () => {
    if (authToggle) {
      const signupInput = { ...signup, password_confirm: true };
      mutate(signupInput, {
        onSuccess: () => {
          handleAuthToggle();
        },
      });
    }
    if (!authToggle) {
      mutate(signin, {
        onSuccess: data => {
          tokenStorage.setToken(data.accessToken);
        },
      });
    }
    handleInputInit();
  };

  return { handleAuthEvent, nowLogin };
};

export default useAuth;
