import styled from 'styled-components';
import { LabelText, Place_Holder } from '../../../utils/constant';
import useAuth from '../../../hooks/useAuth';

const AuthInput = ({ label, type, value }) => {
  const { handleAuthInput } = useAuth();
  return (
    <Label>
      {LabelText[label]}
      <Input
        type={type}
        name={label}
        value={value}
        placeholder={Place_Holder[label]}
        onChange={handleAuthInput}
      />
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
