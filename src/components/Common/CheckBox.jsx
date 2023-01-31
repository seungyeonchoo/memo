import styled from 'styled-components';

const CheckBox = ({ name, value, text, onChange }) => {
  return (
    <>
      <StyledCheckBox name={name} value={value} onChange={onChange} />
      <div>{text}</div>
    </>
  );
};

export default CheckBox;

const StyledCheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  clip: rect(0 0 0 0);
`;
