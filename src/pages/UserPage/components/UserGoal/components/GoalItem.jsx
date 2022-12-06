import styled from 'styled-components';
import ItemForm from './ItemForm';

const GoalItem = ({ data }) => {
  return (
    <ItemBox>
      {data?.goals.map(goal => {
        return <ItemForm key={goal.id} goal={goal} />;
      })}
    </ItemBox>
  );
};

export default GoalItem;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
`;
