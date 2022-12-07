import styled from 'styled-components';
import Input from '../../../components/Common/Input';
import useAuth from '../../../hooks/useAuth';

const RegisterInput = () => {
  const { signup, handleAuthInput } = useAuth();
  return (
    <Box>
      <Input
        label="이메일"
        type="email"
        name="email"
        value={signup.email}
        placeholder="이메일을 입력해주세요"
        onChange={handleAuthInput}
      />
      <Input
        label="비밀번호"
        type="password"
        name="password"
        value={signup.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleAuthInput}
      />
      <Input
        label="비밀번호 확인"
        type="password"
        name="password_confirm"
        value={signup.password_confirm}
        placeholder="비밀번호를 다시 한 번 입력해주세요"
        onChange={handleAuthInput}
      />
      <Input
        label="이름"
        type="name"
        name="name"
        value={signup.name}
        placeholder="이름을 입력해주세요"
        onChange={handleAuthInput}
      />
    </Box>
  );
};

export default RegisterInput;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
