import styled from 'styled-components';
import { Date } from '../../../../pages/UserPage/UserProfile/components/ImminentItem';
import calcDiffDay from '../../../../utils/calcDiffDay';

const GoalStatus = ({ goal }) => {
  return (
    <StatusBox>
      <Date>{goal?.is_complete ? 'Clear' : calcDiffDay(goal.due_date)}</Date>
      <div>
        {goal?.todos.filter(el => el.is_complete === true).length} of {goal.todos.length}
      </div>
    </StatusBox>
  );
};

export default GoalStatus;

const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
