import AuthInput from './AuthInput';
import AuthInputBox from './AuthInputBox';

const LoginInput = () => {
  return (
    <AuthInputBox>
      <AuthInput label="Email" type="email" />
      <AuthInput label="Password" type="password" />
    </AuthInputBox>
  );
};

export default LoginInput;
