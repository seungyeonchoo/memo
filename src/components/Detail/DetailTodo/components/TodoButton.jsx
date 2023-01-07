import styled from 'styled-components';
import useMutate from '../../../../hooks/useMutate';
import useParam from '../../../../hooks/useParam';
import useToggle from '../../../../hooks/useToggle';
import { detailToggleChange } from '../../../../store/slices/toggleSlice';
import GoalUtils from '../../../../utils/GoalUtils';
import { Button } from '../../../Common/Button';

const TodoButton = ({ goal }) => {
  const { checkUserId } = useParam();
  const { handleGlobalToggle } = useToggle(detailToggleChange);
  const isComplete = { is_complete: !goal?.is_complete };
  const { handleMutation } = useMutate(`goals/${goal?.id}`, 'patch', isComplete);

  return (
    <Wrapper>
      {checkUserId && (
        <Button
          text="완료"
          size="medium"
          onClick={handleMutation}
          disabled={!GoalUtils.isComplete(goal)}
        />
      )}
      <Button text="닫기" size={checkUserId ? 'medium' : 'large'} onClick={handleGlobalToggle} />
    </Wrapper>
  );
};
export default TodoButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
