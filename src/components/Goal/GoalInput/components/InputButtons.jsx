import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useMutate from '../../../../hooks/useMutate';
import useToggle from '../../../../hooks/useToggle';
import { createToggleChange, editToggleChange } from '../../../../store/slices/toggleSlice';
import { user_id } from '../../../../utils/Storage';
import { Button } from '../../../Common/Button';

const InputButton = ({ type }) => {
  const { id } = useParams();
  const { input, toggle } = useSelector(state => state);
  const createToggle = toggle.createToggle;
  const { handleGlobalToggle } = useToggle(createToggle ? createToggleChange : editToggleChange);
  const { handleMutation: handleCreateGoal } = useMutate(
    createToggle ? 'goals' : `goals/${input.goalInput.id}`,
    createToggle ? 'post' : 'patch',
    input.goalInput,
    handleGlobalToggle
  );
  const { handleMutation: handleCreateGroupGoal } = useMutate(
    createToggle ? 'groupGoals' : `'groupGoals'/${input.groupGoalInput.id}`,
    createToggle ? 'post' : 'patch',
    { ...input.groupGoalInput, groupId: Number(id) },
    handleGlobalToggle
  );

  const handleMutation = type === 'users' ? handleCreateGoal : handleCreateGroupGoal;

  return (
    <ButtonWrapper>
      <Button size="medium" text="저장" onClick={handleMutation} />
      <Button size="medium" text="취소" onClick={handleGlobalToggle} />
    </ButtonWrapper>
  );
};

// stop
export default InputButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
