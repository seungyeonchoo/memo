import styled from 'styled-components';
import useParam from '../../../hooks/useParam';
import GoalStatus from './components/GoalStatus';
import GoalText from './components/GoalText';
import GoalButton from './components/GoalButton';
import useInput from '../../../hooks/useInput';
import { goalInputChange } from '../../../store/slices/inputSlice';
import useToggle from '../../../hooks/useToggle';
import { detailToggleChange } from '../../../store/slices/toggleSlice';

const GoalItem = ({ goal, toggle, handleToggle, handleSetInput }) => {
  const { checkUserId } = useParam();
  const { setGlobalInput } = useInput(goal, goalInputChange);
  const { handleGlobalToggle } = useToggle(detailToggleChange, setGlobalInput);

  return (
    <GoalWrapper onClick={handleGlobalToggle}>
      <GoalStatus goal={goal} />
      <GoalText goal={goal} />
      {checkUserId && (
        <GoalButton
          goal={goal}
          toggle={toggle}
          handleToggle={handleToggle}
          handleSetInput={handleSetInput}
        />
      )}
    </GoalWrapper>
  );
};

export default GoalItem;

const GoalWrapper = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 20rem;
  padding: 0.5em 2em;
  font-size: 0.8em;
  cursor: pointer;
  background-color: #e0e0e0;
  && {
    margin-bottom: 0.5em;
  }
`;
