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
  display: flex;
  flex-direction: column;
  min-height: 40vh;
  justify-content: space-between;
  position: absolute;
  padding: 2em;
  z-index: 100;
  background-color: #e0e0e0;
`;
