import AuthInput from './AuthInput';
import AuthInputBox from './AuthInputBox';

const RegisterInput = () => {
  return (
    <AuthInputBox>
      <AuthInput label="Email" type="email" />
      <AuthInput label="Password" type="password" />
      <AuthInput label="Password 확인" type="password" />
      <AuthInput label="First Name" type="text" />
      <AuthInput label="Last Name" type="text" />
      <AuthInput label="User Name" type="text" />
      <AuthInput label="Birthday" type="date" />
    </AuthInputBox>
  );
};

export default RegisterInput;
