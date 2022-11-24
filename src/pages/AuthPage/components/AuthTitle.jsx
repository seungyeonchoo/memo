import styled from 'styled-components';

const AuthTitle = ({ type }) => {
  const message = type === 'login' ? '로그인' : '회원가입';

  return <TitleText>{message}</TitleText>;
};

export default AuthTitle;

const TitleText = styled.h1``;
