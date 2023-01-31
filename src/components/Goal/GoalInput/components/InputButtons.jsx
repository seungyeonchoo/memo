import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useMutate from '../../../../hooks/useMutate';
import useToggle from '../../../../hooks/useToggle';
import { createToggleChange, editToggleChange } from '../../../../store/slices/toggleSlice';
import { Button } from '../../../Common/Button';

const InputButton = () => {
  const { input, toggle } = useSelector(state => state);
  const handledToggle = toggle.createToggle ? createToggleChange : editToggleChange;
  const { handleGlobalToggle: handleGoalToggle } = useToggle(handledToggle);
  const { handleMutation: handleCreateGoal } = useMutate(
    toggle.createToggle ? 'goals' : `goals/${input.goalInput.id}`,
    toggle.createToggle ? 'post' : 'patch',
    input.goalInput,
    handleGoalToggle
  );

  return (
    <ButtonWrapper>
      <Button size="medium" text="저장" onClick={handleCreateGoal} />
      <Button size="medium" text="취소" onClick={handleGoalToggle} />
    </ButtonWrapper>
  );
};

// stop
export default InputButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
