import styled from 'styled-components';
import { Button } from '../../components/Common/Button';
import useAuth from '../../hooks/useAuth';
import useToggle from '../../hooks/useToggle';
import InputUtils from '../../utils/InputUtils';
import AuthRegister from './components/AuthRegister';
import AuthTitle from './components/AuthTitle';
import LoginInput from './components/LoginInput';
import RegisterInput from './components/RegisterInput';

const AuthPage = () => {
  const { authToggle } = useToggle();
  const { handleAuthEvent } = useAuth();
  //   const isValid = authToggle ? InputUtils.signUp(signup) : InputUtils.signIn(signin);

  return (
    <Container>
      <AuthTitle />
      {authToggle ? <RegisterInput /> : <LoginInput />}
      <Button
        size="large"
        text={authToggle ? '회원가입' : '로그인'}
        onClick={handleAuthEvent}
        // disabled={!isValid}
        margin="auth"
      />
      <AuthRegister />
    </Container>
  );
};

export default AuthPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 30vw;
  padding: 2em 0;
  border-radius: 5px;
  background-color: #e0e0e0;
`;
