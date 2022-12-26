import styled from 'styled-components';
import Input from '../../../components/Common/Input';
import useInput from '../../../hooks/useInput';

const RegisterInput = () => {
  const { signup, handleInput } = useInput('auth');
  return (
    <Box>
      <Input
        label="이메일"
        type="email"
        name="email"
        size="large"
        value={signup.email}
        placeholder="이메일을 입력해주세요"
        onChange={handleInput}
      />
      <Input
        label="비밀번호"
        type="password"
        name="password"
        size="large"
        value={signup.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleInput}
      />
      <Input
        label="비밀번호 확인"
        type="password"
        name="password_confirm"
        size="large"
        value={signup.password_confirm}
        placeholder="비밀번호를 다시 한 번 입력해주세요"
        onChange={handleInput}
      />
      <Input
        label="이름"
        type="name"
        name="name"
        size="large"
        value={signup.name}
        placeholder="이름을 입력해주세요"
        onChange={handleInput}
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
