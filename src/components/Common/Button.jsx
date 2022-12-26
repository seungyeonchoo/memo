import styled, { css } from 'styled-components';

const Button = ({ text, onClick, disabled, size }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} size={size}>
      {text}
    </StyledButton>
  );
};

export default Button;

const sizeStyles = css`
  ${props =>
    props.size === 'large' &&
    css`
      height: 2.5rem;
      width: 22.5rem;
      margin: 1rem;
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      height: 2.25rem;
      width: 10rem;
      margin: 1rem;
    `}
  ${props =>
    props.size === 'small' &&
    css`
      height: 1.75rem;
      width: 2rem;
      margin-left: -3rem;
    `}
`;

const StyledButton = styled.button`
  ${sizeStyles}
  color: #f9f9f9;
  background-color: #212121;
  font-size: 0.8rem;
  /* margin: 1rem; */
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #757575;
    cursor: auto;
  }
`;
