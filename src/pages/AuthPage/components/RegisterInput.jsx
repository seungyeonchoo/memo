import useInput from '../../../hooks/useInput';
import AuthInput from './AuthInput';
import AuthInputBox from './AuthInputBox';

const RegisterInput = () => {
  const { signup } = useInput();
  return (
    <AuthInputBox>
      <AuthInput label="email" type="email" value={signup.email} />
      <AuthInput label="password" type="password" value={signup.password} />
      <AuthInput label="password_confirm" type="password" value={signup.password_confirm} />
      <AuthInput label="name" type="text" value={signup.name} />
    </AuthInputBox>
  );
};

export default RegisterInput;
