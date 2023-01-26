import styled from 'styled-components';
import DateUtils from '../../../../utils/DateUtils';

const GoalStatus = ({ goal }) => {
  return (
    <StatusBox>
      <div>{goal?.is_complete ? 'Clear' : DateUtils.diffDate(goal.due_date)}</div>
      <div>{goal?.repeat}</div>
    </StatusBox>
  );
};

export default GoalStatus;

const StatusBox = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
