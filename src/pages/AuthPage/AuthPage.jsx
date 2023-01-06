import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import useToggle2 from '../../hooks/useToggle2';
import AuthRegister from './components/AuthRegister';
import AuthTitle from './components/AuthTitle';
import LoginInput from './components/LoginInput';
import RegisterInput from './components/RegisterInput';

const AuthPage = () => {
  const { authToggle } = useToggle();
  const [registerToggle, handleRegisterToggle] = useToggle2();

  return (
    <Container>
      <AuthTitle toggle={registerToggle} />
      {registerToggle ? <RegisterInput handleToggle={handleRegisterToggle} /> : <LoginInput />}
      <AuthRegister onClick={handleRegisterToggle} toggle={registerToggle} />
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
