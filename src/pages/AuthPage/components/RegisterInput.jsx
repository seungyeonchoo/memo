import AuthInput from './AuthInput';
import AuthInputBox from './AuthInputBox';

const RegisterInput = () => {
  return (
    <AuthInputBox>
      <AuthInput label="email" type="email" />
      <AuthInput label="password" type="password" />
      <AuthInput label="password_confirm" type="password" />
      <AuthInput label="name" type="text" />
    </AuthInputBox>
  );
};

export default RegisterInput;
