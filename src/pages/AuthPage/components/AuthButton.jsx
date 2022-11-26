import styled from 'styled-components';
import useAuth from '../../../hooks/useAuth';
import useInput from '../../../hooks/useInput';
import { checkLoginInput, checkSignupInput } from '../../../utils/checkIsValid';

const AuthButton = ({ type, handleToggle }) => {
  const buttonName = type === 'login' ? '로그인' : '회원가입';
  const { handleAuthEvent } = useAuth(type, handleToggle);
  const { inputState } = useInput();
  const isValid = type === 'login' ? checkLoginInput(inputState) : checkSignupInput(inputState);

  return (
    <Button onClick={handleAuthEvent} disabled={!isValid}>
      {buttonName}
    </Button>
  );
};

export default AuthButton;

const Button = styled.button`
  width: 436px;
  height: 2.45rem;
  margin: 2rem 0;
  color: #f9f9f9;
  background-color: #212121;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #757575;
    cursor: auto;
  }
`;
