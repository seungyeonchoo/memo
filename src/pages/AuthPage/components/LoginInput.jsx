import AuthInput from './AuthInput';
import AuthInputBox from './AuthInputBox';

const LoginInput = () => {
  return (
    <AuthInputBox>
      <AuthInput label="이메일" type="email" />
      <AuthInput label="비밀번호" type="password" />
    </AuthInputBox>
  );
};

export default LoginInput;
