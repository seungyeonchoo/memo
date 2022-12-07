import styled from 'styled-components';
import useGoal from '../../../../../hooks/useGoal';

const GoalItem = ({ goal }) => {
  const { handleDelete, handleIsComplete } = useGoal(goal.id);
  return (
    <Item key={goal.id}>
      <div>
        <div>{goal.due_date}까지</div>
        <div>{goal.goal_name}</div>
        <div>{goal.description}</div>
      </div>
      <div>
        <button onClick={handleIsComplete}>완료</button>
        <button>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </Item>
  );
};

export default GoalItem;

const Item = styled.li`
  display: flex;
`;
