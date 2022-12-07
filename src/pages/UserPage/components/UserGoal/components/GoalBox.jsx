import styled from 'styled-components';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

const GoalBox = ({ data }) => {
  return (
    <ItemBox>
      {data?.goals.map(goal =>
        goal.is_edit ? <GoalInput key={goal.id} /> : <GoalItem key={goal.id} goal={goal} />
      )}
    </ItemBox>
  );
};

export default GoalBox;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
`;
