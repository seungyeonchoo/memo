import styled from 'styled-components';
import useToggle from '../../../../hooks/useToggle';
import useUser from '../../../../hooks/useUser';
import { UserStorage } from '../../../../utils/Storage';
import GoalInput from './components/GoalInput';
import GoalTitle from './components/GoalTitle';
import GoalBox from './components/GoalBox';
import Button from '../../../../components/Common/Button';

const UserGoal = () => {
  const user_id = new UserStorage().getId();
  const { userData } = useUser(user_id);
  const { editGoalToggle, createGoalToggle, handleCreateGoalToggle } = useToggle();
  const openInput = createGoalToggle || editGoalToggle;
  const closeInput = createGoalToggle && editGoalToggle;

  return (
    <GoalContainer>
      <GoalTitle data={userData} />
      {openInput && <GoalInput />}
      {!openInput && <Button size="lg" text="목표추가" onClick={handleCreateGoalToggle} />}
      <GoalBox data={userData} />
    </GoalContainer>
  );
};

export default UserGoal;

const GoalContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
`;
