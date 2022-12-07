import styled from 'styled-components';
import Button from '../../components/Common/Button';
import useAuth from '../../hooks/useAuth';
import useToggle from '../../hooks/useToggle';
import { checkLoginInput, checkSignupInput } from '../../utils/checkIsValid';
import AuthRegister from './components/AuthRegister';
import AuthTitle from './components/AuthTitle';
import LoginInput from './components/LoginInput';
import RegisterInput from './components/RegisterInput';

const AuthPage = () => {
  const { authToggle, handleAuthToggle } = useToggle();
  const { signin, signup, handleAuthEvent } = useAuth();
  const buttonText = authToggle ? '회원가입' : '로그인';
  const isValid = authToggle ? checkSignupInput(signup) : checkLoginInput(signin);

  return (
    <Container>
      <AuthTitle />
      {authToggle ? <RegisterInput /> : <LoginInput />}
      <Button text={buttonText} onClick={handleAuthEvent} disabled={!isValid} />
      <AuthRegister handleToggle={handleAuthToggle} />
    </Container>
  );
};

export default AuthPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  margin: auto;
`;
