import styled from 'styled-components';
import GoalItem from './GoalItem';

const GoalBox = ({ data }) => {
  return (
    <ItemBox>
      {data?.map(goal => (
        <GoalItem key={goal.id} goal={goal} />
      ))}
    </ItemBox>
  );
};

export default GoalBox;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
`;
