import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import AuthButton from './components/AuthButton';
import AuthRegister from './components/AuthRegister';
import AuthTitle from './components/AuthTitle';
import LoginInput from './components/LoginInput';
import RegisterInput from './components/RegisterInput';

const AuthPage = () => {
  const { isToggled, handleIsToggled } = useToggle();
  const type = isToggled ? 'signup' : 'login';

  return (
    <Container>
      <AuthTitle type={type} />
      {isToggled ? <RegisterInput /> : <LoginInput />}
      <AuthButton type={type} handleToggle={handleIsToggled} />
      <AuthRegister type={type} handleToggle={handleIsToggled} />
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
