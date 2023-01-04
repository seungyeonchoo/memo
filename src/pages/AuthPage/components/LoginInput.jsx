import styled from 'styled-components';
import { Button } from '../../../components/Common/Button';
import Input from '../../../components/Common/Input';
import useInput from '../../../hooks/useInput';
import useInput2 from '../../../hooks/useInput2';
import InputUtils from '../../../utils/InputUtils';
import TokenStorage from '../../../utils/Storage';

const LoginInput = () => {
  //   const initialInput = InputUtils.initialSignin;
  const { signin, handleInput } = useInput('auth');
  //   const { inputValue, handleInput, handleMutation } = useInput2(initialInput, 'signin', 'post');
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
      {/* <Button
        size="large"
        text="SIGN IN"
        onClick={handleMutation}
        // disabled={!isValid}
        margin="auth"
      /> */}
    </Box>
  );
};

export default LoginInput;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
