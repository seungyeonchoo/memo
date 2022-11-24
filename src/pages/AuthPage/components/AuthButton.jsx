import styled from 'styled-components';

const AuthButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default AuthButton;

const Button = styled.button``;
