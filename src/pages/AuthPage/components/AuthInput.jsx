import styled from 'styled-components';

const AuthInput = ({ label, name }) => {
  return (
    <Label>
      {label}
      <Input type={name} />
    </Label>
  );
};

export default AuthInput;

const Label = styled.label``;
const Input = styled.input``;
