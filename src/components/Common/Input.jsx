import styled from 'styled-components';

const Input = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <Label>
      {label}
      {type === 'textarea' ? (
        <StyledTextarea name={name} value={value} onChange={onChange} />
      ) : (
        <StyledInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </Label>
  );
};

export default Input;

const Label = styled.label`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  && {
    margin-top: 2rem;
  }
`;

const StyledInput = styled.input`
  height: 2rem;
  width: 400px;
  padding: 0.1rem 1rem;
  margin-top: 0.5rem;
  &:focus {
    outline: 0;
    border: 2px solid #212121;
  }
`;

const StyledTextarea = styled.textarea`
  height: 6rem;
  width: 400px;
  padding: 1rem 1rem;
  margin-top: 0.5rem;
  resize: none;
  &:focus {
    outline: 0;
    border: 2px solid #212121;
  }
`;
