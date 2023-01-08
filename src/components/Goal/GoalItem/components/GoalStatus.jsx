import styled from 'styled-components';

import DateUtils from '../../../../utils/DateUtils';
import { Date } from '../../../Approaching/components/ApproachingGoal';

const GoalStatus = ({ goal }) => {
  return (
    <StatusBox>
      <Date>{goal?.is_complete ? 'Clear' : DateUtils.diffDate(goal.due_date)}</Date>
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
