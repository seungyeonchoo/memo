import styled from 'styled-components';
import useAuth from '../../../hooks/useAuth';

const AuthButton = ({ type }) => {
  const buttonName = type === 'login' ? '로그인' : '회원가입';
  const { handleAuthEvent } = useAuth(type);

  return <Button onClick={handleAuthEvent}>{buttonName}</Button>;
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
`;
