import styled from 'styled-components';
import useAuth from '../../../hooks/useAuth';
import useToggle from '../../../hooks/useToggle';
import { checkLoginInput, checkSignupInput } from '../../../utils/checkIsValid';

const AuthButton = () => {
  const { authToggle } = useToggle();
  const { signin, signup } = useAuth();
  const { handleAuthEvent } = useAuth();

  const buttonName = authToggle ? '회원가입' : '로그인';
  const isValid = authToggle ? checkSignupInput(signup) : checkLoginInput(signin);

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
