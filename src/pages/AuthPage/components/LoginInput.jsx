import styled from 'styled-components';
import { Button } from '../../../components/Common/Button';
import Input from '../../../components/Common/Input';
import useInput2 from '../../../hooks/useInput2';
import useMutate from '../../../hooks/useMutate';
import useToggle from '../../../hooks/useToggle';
import InputUtils from '../../../utils/InputUtils';

const LoginInput = () => {
  const initialInput = InputUtils.initialSignin;
  const { handleToggle } = useToggle('auth');
  const { inputValue, handleInput, initInput } = useInput2(initialInput);
  const { handleMutation } = useMutate('signin', 'post', inputValue, initInput, handleToggle);

  return (
    <Box>
      <Input
        label="이메일"
        type="email"
        name="email"
        size="large"
        value={inputValue.email}
        placeholder="이메일을 입력해주세요"
        onChange={handleInput}
      />
      <Input
        label="비밀번호"
        type="password"
        name="password"
        size="large"
        value={inputValue.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleInput}
      />
      <Button
        size="large"
        text="SIGN IN"
        onClick={handleMutation}
        // disabled={!isValid}
        margin="auth"
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
