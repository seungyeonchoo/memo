import styled from 'styled-components';

const Button = ({ text, onClick, disabled, size, margin }) => {
  const btn_size = size === 'lg' ? '436px' : '218px';
  const btn_margin = margin === 'auth' ? '2rem 0' : '0';
  return (
    <StyledButton onClick={onClick} disabled={disabled} size={btn_size} mg={btn_margin}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: ${props => props.size};
  height: 2.45rem;
  margin: ${props => props.mg};
  color: #f9f9f9;
  background-color: #212121;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #757575;
    cursor: auto;
  }
`;
