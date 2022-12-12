import styled from 'styled-components';
import calcDiffDay from '../../../../../utils/calcDiffDay';

const ImminentItem = ({ goal }) => {
  return (
    <ItemWrapper>
      <Date>D-{calcDiffDay(goal.due_date)}</Date>
      <div>
        <SubText>{goal.due_date}까지</SubText>
        <Text>{goal.goal_name}</Text>
      </div>
    </ItemWrapper>
  );
};

export default ImminentItem;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.5em;
  padding: 1em;
`;

const Date = styled.div`
  width: 10%;
  text-align: center;
  font-weight: bold;
  color: #b71c1c;
`;

const SubText = styled.p`
  font-size: 0.8em;
  color: #212121;
`;
const Text = styled.p``;
