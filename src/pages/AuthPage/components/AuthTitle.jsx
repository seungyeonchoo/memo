import styled from 'styled-components';
import useToggle from '../../../hooks/useToggle';

const AuthTitle = () => {
  const { authToggle } = useToggle();
  const message = authToggle ? '회원가입' : '로그인';

  return <TitleText>{message}</TitleText>;
};

export default AuthTitle;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin: 1em;
  text-align: left;
`;
