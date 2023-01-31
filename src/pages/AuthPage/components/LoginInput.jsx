import styled from 'styled-components';
import { Button } from '../../../components/Common/Button';
import Input from '../../../components/Common/Input';
import useInput from '../../../hooks/useInput';
import useMutate from '../../../hooks/useMutate';
import InputUtils from '../../../utils/InputUtils';

const LoginInput = ({}) => {
  const initialInput = InputUtils.initialSignin;
  const { inputValue, handleInput, initInput } = useInput(initialInput);
  const { handleMutation } = useMutate('signin', 'post', inputValue, initInput);

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
        disabled={!InputUtils.signIn(inputValue)}
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
