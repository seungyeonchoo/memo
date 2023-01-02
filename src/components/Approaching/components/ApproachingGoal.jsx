import styled from 'styled-components';
import DateUtils from '../../../utils/DateUtils';

const ApproachingGoal = ({ goal }) => {
  return (
    <ItemWrapper>
      <Date>{DateUtils.diffDate(goal.due_date)}</Date>
      <div>
        <SubText>{goal.due_date}까지</SubText>
        <Text>{goal.goal_name}</Text>
      </div>
    </ItemWrapper>
  );
};

export default ApproachingGoal;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #e0e0e0;
  width: 80%;
  margin: 0.5em;
  padding: 1em;
`;

export const Date = styled.div`
  text-align: center;
  font-weight: bold;
  color: #b71c1c;
`;

const SubText = styled.p`
  font-size: 0.8em;
  color: #212121;
`;
const Text = styled.p``;
