import styled from 'styled-components';
import Input from '../../../components/Common/Input';
import useAuth from '../../../hooks/useAuth';

const LoginInput = () => {
  const { signin, handleAuthInput } = useAuth();
  return (
    <Box>
      <Input
        label="이메일"
        type="email"
        name="email"
        value={signin.email}
        placeholder="이메일을 입력해주세요"
        onChange={handleAuthInput}
      />
      <Input
        label="비밀번호"
        type="password"
        name="password"
        value={signin.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleAuthInput}
      />
    </Box>
  );
};

export default LoginInput;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
