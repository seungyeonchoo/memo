import styled from 'styled-components';
import Fulfill from './Fulfill';

const GoalFulfill = ({ list, goal }) => {
  return (
    <ItemWrapper>
      {list.map((date, idx) => (
        <Fulfill key={date} date={date} goal={goal} idx={idx} />
      ))}
    </ItemWrapper>
  );
};

export default GoalFulfill;

const ItemWrapper = styled.ul`
  margin: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 60%;
  width: 70%;
  overflow: scroll;
  font-size: 0.8em;
`;
