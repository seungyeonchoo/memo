import styled from 'styled-components';

const Button = ({ text, onClick, disabled, size }) => {
  const btn_size = size === 'lg' ? '436px' : '218px';
  return (
    <StyledButton onClick={onClick} disabled={disabled} size={btn_size}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: ${props => props.size};
  height: 2.45rem;
  margin: 2rem 0;
  color: #f9f9f9;
  background-color: #212121;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #757575;
    cursor: auto;
  }
`;
