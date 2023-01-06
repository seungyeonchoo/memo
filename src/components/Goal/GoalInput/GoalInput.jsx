import styled from 'styled-components';
import InputButton from './components/InputButtons';
import Inputs from './components/Inputs';
import InputTitle from './components/InputTitle';

const GoalInput = ({ toggle, handleToggle, handleMutation, handleInputChange }) => {
  const { handleCreateToggle, handleEditToggle } = handleToggle;
  const { create, update } = handleMutation;
  const { inputValue, handleInput } = handleInputChange;

  return (
    <InputWrapper>
      <InputTitle />
      <Inputs input={inputValue} handleInput={handleInput} />
      <InputButton
        handleClick={toggle ? create : update}
        handleCancel={toggle ? handleCreateToggle : handleEditToggle}
      />
    </InputWrapper>
  );
};

export default GoalInput;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 1em 0;
  border-radius: 10px;
`;
