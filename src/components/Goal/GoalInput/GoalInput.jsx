import styled from 'styled-components';
import InputButton from './components/InputButtons';
import Inputs from './components/Inputs';

const GoalInput = () => {
  return (
    <InputBox>
      <Inputs />
      <InputButton />
    </InputBox>
  );
};

export default GoalInput;

const InputBox = styled.div`
  z-index: 50;
  position: relative;
`;
