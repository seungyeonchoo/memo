import styled from 'styled-components';

const Place_Holder = {
  이메일: '이메일을 입력해주세요.',
  비밀번호: '비밀번호를 입력해주세요.',
  비밀번호확인: '비밀번호를 다시 한 번 입력해주세요',
  이름: '이름을 입력해주세요.',
};

const AuthInput = ({ label, type }) => {
  return (
    <Label>
      {label === '비밀번호확인' ? '비밀번호 확인' : label}
      <Input type={type} placeholder={Place_Holder[label]} />
    </Label>
  );
};

export default AuthInput;

const Label = styled.label`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  && {
    margin-top: 2rem;
  }
`;
const Input = styled.input`
  height: 2rem;
  width: 400px;
  padding: 0.1rem 1rem;
  margin-top: 0.5rem;
  &:focus {
    outline: 0;
    border: 2px solid #212121;
  }
`;
