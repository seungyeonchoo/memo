import styled from 'styled-components';

const AuthInputBox = ({ children }) => {
  return <Box>{children}</Box>;
};

export default AuthInputBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
