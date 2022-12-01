import styled from 'styled-components';

const GoalItem = ({ data }) => {
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
              <button>완료</button>
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
