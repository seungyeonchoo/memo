import styled from 'styled-components';
import calcDiffDay from '../../../../../utils/calcDiffDay';

const ImminentItem = ({ goal }) => {
  return (
    <ItemWrapper>
      <Date>D-{calcDiffDay(goal.due_date)}</Date>
      <div>
        <div>{goal.due_date}까지</div>
        <div>{goal.goal_name}</div>
      </div>
    </ItemWrapper>
  );
};

export default ImminentItem;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled.div`
  background-color: green;
  width: 10%;
  text-align: center;
  padding: 1em;
`;
