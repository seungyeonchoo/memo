import styled from 'styled-components';
import GoalUtils from '../../../utils/GoalUtils';
import ApproachingGoal from './ApproachingGoal';

const ApproachingList = ({ user }) => {
  return (
    <Box>
      {GoalUtils.isApproaching(user).map(el => (
        <ApproachingGoal key={el.id} goal={el} />
      ))}
    </Box>
  );
};

export default ApproachingList;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5em;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  height: 40vh;
  background-color: #fff;
`;
