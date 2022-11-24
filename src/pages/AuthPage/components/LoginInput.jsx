import AuthInput from './AuthInput';
import AuthInputBox from './AuthInputBox';

const LoginInput = () => {
  return (
    <AuthInputBox>
      <AuthInput label="email" type="email" />
      <AuthInput label="password" type="password" />
    </AuthInputBox>
  );
};

export default LoginInput;
