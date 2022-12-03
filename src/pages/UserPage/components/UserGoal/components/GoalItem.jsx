import styled from 'styled-components';
import useGoal from '../../../../../hooks/useGoal';

const GoalItem = ({ data }) => {
  const { completeGoal } = useGoal();
  return (
    <ItemBox>
      {data?.user_goals.map(goal => {
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
            </div>
          </Item>
        );
      })}
    </ItemBox>
  );
};

export default GoalItem;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
`;
const Item = styled.li`
  display: flex;
`;
