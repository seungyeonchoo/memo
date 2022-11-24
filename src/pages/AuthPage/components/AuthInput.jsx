import styled from 'styled-components';
import { LabelText, Place_Holder } from '../../../constant/Constant';

const AuthInput = ({ label, type }) => {
  return (
    <Label>
      {LabelText[label]}
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
