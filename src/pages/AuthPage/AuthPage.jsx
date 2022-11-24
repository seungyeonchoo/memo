import styled from 'styled-components';
import AuthButton from './components/AuthButton';
import AuthRegister from './components/AuthRegister';
import AuthTitle from './components/AuthTitle';
import LoginInput from './components/LoginInput';
import RegisterInput from './components/RegisterInput';

const AuthPage = () => {
  return (
    <Container>
      <AuthTitle type="login" />
      <LoginInput />
      <RegisterInput />
      <AuthButton type="login" />
      <AuthRegister type="login" />
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
