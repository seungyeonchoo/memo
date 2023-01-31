import styled from 'styled-components';

const AuthRegister = ({ onClick, toggle }) => {
  return (
    <Box>
      {toggle ? '이미 계정이 있으신가요?' : '아직 계정이 없으신가요?'}{' '}
      <Button onClick={onClick}>{toggle ? '로그인' : '회원가입'} 화면으로</Button>
    </Box>
  );
};

export default AuthRegister;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.5rem;
`;
const Button = styled.span`
  cursor: pointer;
  color: #212121;
  text-decoration: underline;
`;
