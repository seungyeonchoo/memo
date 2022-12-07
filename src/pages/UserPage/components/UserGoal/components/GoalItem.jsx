import styled from 'styled-components';
import useGoal from '../../../../../hooks/useGoal';
import useToggle from '../../../../../hooks/useToggle';

const GoalItem = ({ goal }) => {
  const { handleEditGoalToggle, editGoalToggle } = useToggle(goal);
  const { handleDelete, handleIsComplete } = useGoal(goal.id);
  return (
    <Item key={goal.id}>
      <button onClick={handleIsComplete}>완료</button>
      <div>
        <Text>{goal.due_date}까지</Text>
        <Text>{goal.goal_name}</Text>
        <Text>{goal.description}</Text>
      </div>
      <div>
        <button onClick={handleEditGoalToggle} disabled={editGoalToggle}>
          수정
        </button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </Item>
  );
};

export default GoalItem;

const Item = styled.li`
  display: flex;
`;

const Text = styled.p``;
