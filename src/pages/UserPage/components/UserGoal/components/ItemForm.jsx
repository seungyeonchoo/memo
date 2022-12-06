import styled from 'styled-components';
import useGoal from '../../../../../hooks/useGoal';

const ItemForm = ({ goal }) => {
  const { handleDelete, completeGoal } = useGoal(goal.id);
  return (
    <Item key={goal.id}>
      <div>
        <div>{goal.due_date}까지</div>
        <div>{goal.goal_name}</div>
        <div>{goal.description}</div>
      </div>
      <div>
        <button onClick={completeGoal}>완료</button>
        <button>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </Item>
  );
};

export default ItemForm;

const Item = styled.li`
  display: flex;
`;
