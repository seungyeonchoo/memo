import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import StorageUtils from '../../utils/StorageUtils';
import AuthRegister from './components/AuthRegister';
import AuthTitle from './components/AuthTitle';
import LoginInput from './components/LoginInput';
import RegisterInput from './components/RegisterInput';

const AuthPage = () => {
  const { toggle, handleToggle } = useToggle();
  const token = StorageUtils.getToken();
  const nav = useNavigate();

  // useEffect(() => {
  //   if (token) nav('/main');
  // }, []);

  return (
    <Container>
      <AuthTitle toggle={toggle} />
      {toggle ? <RegisterInput handleToggle={handleToggle} /> : <LoginInput />}
      <AuthRegister onClick={handleToggle} toggle={toggle} />
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
