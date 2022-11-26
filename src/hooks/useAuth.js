import { useMutation } from 'react-query';
import Http from '../services/Http';
import TokenStorage from '../utils/TokenStorage';
import useInput from './useInput';

const useAuth = (type, handleToggle) => {
  const authService = new Http(type);
  const tokenStorage = new TokenStorage();

  const { inputState } = useInput();
  const { mutate } = useMutation(authService.post);

  const handleAuthEvent = () => {
    if (type === 'login') {
      mutate(inputState, {
        onSuccess: data => tokenStorage.setToken(data.accessToken),
      });
    }
    if (type === 'signup') {
      const signupInput = { ...inputState, password_confirm: true };
      mutate(signupInput, {
        onSuccess: data => tokenStorage.setToken(data.accessToken),
      });
      handleToggle();
    }
  };

  return { handleAuthEvent };
};

export default useAuth;
