import { useMutation } from 'react-query';
import Http from '../services/Http';
import TokenStorage from '../utils/TokenStorage';
import useInput from './useInput';

const useAuth = type => {
  const authService = new Http(type);
  const tokenStorage = new TokenStorage();

  const { inputState } = useInput();
  const { mutate } = useMutation(authService.post);

  const handleAuthEvent = () => {
    mutate(inputState, {
      onSuccess: data => tokenStorage.setToken(data.accessToken),
    });
  };

  return { handleAuthEvent };
};

export default useAuth;
