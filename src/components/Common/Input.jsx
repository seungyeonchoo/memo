import styled, { css } from 'styled-components';

export const Input = ({ label, type, name, value, size, onChange, placeholder }) => {
  return (
    <Label>
      {label && label}
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
      />
    </Label>
  );
};

export const AreaInput = ({ label, name, value, size, onChange, placeholder }) => {
  return (
    <Label>
      {label && label}
      <StyledTextarea
        name={name}
        value={value}
        size={size}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Label>
  );
};

export default Input;

const Label = styled.label`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  /* margin: 1rem 0; */
`;

const sizeStyles = css`
  ${props =>
    props.size === 'large' &&
    css`
      height: 2rem;
      width: 20rem;
      margin: 1rem 0;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      height: 1.2rem;
      width: 15rem;
      margin: 0.5rem 0;
    `}
`;

const StyledInput = styled.input`
  ${sizeStyles}
  padding: 0.1rem 1rem;
  &:focus {
    outline: 0;
    border: 2px solid #212121;
  }
`;

const StyledTextarea = styled.textarea`
  ${sizeStyles}
  padding: 1rem 1rem;
  margin-top: 0.5rem;
  resize: none;
  &:focus {
    outline: 0;
    border: 2px solid #212121;
  }
`;
