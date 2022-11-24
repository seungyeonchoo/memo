import AuthInput from './AuthInput';
import AuthInputBox from './AuthInputBox';

const RegisterInput = () => {
  return (
    <AuthInputBox>
      <AuthInput label="이메일" type="email" />
      <AuthInput label="비밀번호" type="password" />
      <AuthInput label="비밀번호확인" type="password" />
      <AuthInput label="이름" type="text" />
    </AuthInputBox>
  );
};

export default RegisterInput;
