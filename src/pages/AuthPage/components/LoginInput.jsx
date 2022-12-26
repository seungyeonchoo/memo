import styled from 'styled-components';
import Input from '../../../components/Common/Input';
import useInput from '../../../hooks/useInput';

const LoginInput = () => {
  const { signin, handleInput } = useInput('auth');
  return (
    <Box>
      <Input
        label="이메일"
        type="email"
        name="email"
        size="large"
        value={signin.email}
        placeholder="이메일을 입력해주세요"
        onChange={handleInput}
      />
      <Input
        label="비밀번호"
        type="password"
        name="password"
        size="large"
        value={signin.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleInput}
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
