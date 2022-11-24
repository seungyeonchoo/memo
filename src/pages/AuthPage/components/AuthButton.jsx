import styled from 'styled-components';

const AuthButton = ({ type }) => {
  const buttonName = type === 'login' ? '로그인' : '회원가입';
  return <Button>{buttonName}</Button>;
};

export default AuthButton;

const Button = styled.button``;
