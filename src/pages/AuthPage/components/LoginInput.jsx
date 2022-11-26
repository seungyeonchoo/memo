import useInput from '../../../hooks/useInput';
import AuthInput from './AuthInput';
import AuthInputBox from './AuthInputBox';

const LoginInput = () => {
  const { signin } = useInput();
  return (
    <AuthInputBox>
      <AuthInput label="email" type="email" value={signin.email} />
      <AuthInput label="password" type="password" value={signin.password} />
    </AuthInputBox>
  );
};

export default LoginInput;
