import styled from 'styled-components';

const AuthInput = ({ label, type }) => {
  return (
    <Label>
      {label}
      <Input type={type} />
    </Label>
  );
};

export default AuthInput;

const Label = styled.label``;
const Input = styled.input``;
