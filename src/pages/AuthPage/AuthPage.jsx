import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import AuthButton from './components/AuthButton';
import AuthRegister from './components/AuthRegister';
import AuthTitle from './components/AuthTitle';
import LoginInput from './components/LoginInput';
import RegisterInput from './components/RegisterInput';

const AuthPage = () => {
  const { authToggle, handleAuthToggle } = useToggle();

  return (
    <Container>
      <AuthTitle />
      {authToggle ? <RegisterInput /> : <LoginInput />}
      <AuthButton handleToggle={handleAuthToggle} />
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
