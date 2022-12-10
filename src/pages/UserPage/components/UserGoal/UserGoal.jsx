import styled from 'styled-components';
import useToggle from '../../../../hooks/useToggle';
import useUser from '../../../../hooks/useUser';
import { UserStorage } from '../../../../utils/Storage';
import GoalInput from './components/GoalInput';
import GoalTitle from './components/GoalTitle';
import GoalBox from './components/GoalBox';
import Button from '../../../../components/Common/Button';
import GoalFilters from './components/GoalFilters';
import useGoal from '../../../../hooks/useGoal';

const UserGoal = () => {
  const user_id = new UserStorage().getId();
  const { goalData } = useGoal();
  const { userData } = useUser(user_id);
  const { editGoalToggle, createGoalToggle, handleCreateGoalToggle } = useToggle();
  const open = createGoalToggle || editGoalToggle;

  return (
    <GoalContainer>
      <GoalTitle data={userData} />
      {open && <GoalInput />}
      {!open && <Button size="lg" text="목표추가" onClick={handleCreateGoalToggle} />}
      <GoalFilters />
      <GoalBox data={goalData} />
    </GoalContainer>
  );
};

export default UserGoal;

const GoalContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  padding: 0 1em;
`;
