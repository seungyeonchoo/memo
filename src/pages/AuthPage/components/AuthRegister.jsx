import styled from 'styled-components';

const message = {
  login: '이미 계정이 있으신가요?',
  register: '아직 계정이 없으신가요?',
};

const AuthRegister = ({ type }) => {
  const moveTo = type === 'login' ? '로그인' : '회원가입';
  return (
    <Box>
      {message[type]} <Button>{moveTo}</Button>
    </Box>
  );
};

export default AuthRegister;

const Box = styled.div``;
const Button = styled.span``;
