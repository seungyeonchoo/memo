import styled from 'styled-components';

const AuthTitle = ({ toggle }) => {
  return <TitleText>{toggle ? '회원가입' : '로그인'}</TitleText>;
};

export default AuthTitle;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin: 1em;
  text-align: left;
`;
