import styled from 'styled-components';
import useCheck from '../../../../hooks/useCheck';
import useParam from '../../../../hooks/useParam';
import useToggle from '../../../../hooks/useToggle';
import GoalUtils from '../../../../utils/GoalUtils';
import { Button } from '../../../Common/Button';

const TodoButton = ({ goal }) => {
  const { checkUserId } = useParam();
  const { handleIsComplete } = useCheck('goals', goal?.id);
  const { handleToggle } = useToggle('detail');

  return (
    <Wrapper>
      {checkUserId && (
        <Button
          text="완료"
          size="medium"
          onClick={handleIsComplete}
          disabled={!GoalUtils.isComplete(goal)}
        />
      )}
      <Button text="닫기" size={checkUserId ? 'medium' : 'large'} onClick={handleToggle} />
    </Wrapper>
  );
};
export default TodoButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
