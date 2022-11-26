import { useDispatch, useSelector } from 'react-redux';
import { inputChange, signinChange, signupChange } from '../store/slices/inputSlice';
import useToggle from './useToggle';

const useInput = () => {
  const dispatch = useDispatch();
  const { signin, signup } = useSelector(state => state.input);
  const { authToggle } = useToggle();
  const initialSignin = { email: '', password: '' };
  const initialSignup = { email: '', password: '', password_confirm: '', name: '' };

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (authToggle) dispatch(signupChange({ ...signup, [name]: value }));
    if (!authToggle) dispatch(signinChange({ ...signin, [name]: value }));
  };

  const handleInputInit = () => {
    if (authToggle) dispatch(signupChange(initialSignup));
    if (!authToggle) dispatch(signinChange(initialSignin));
  };

  return { signin, signup, handleInputChange, handleInputInit };
};

export default useInput;
