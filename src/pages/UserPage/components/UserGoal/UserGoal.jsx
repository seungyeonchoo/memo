import styled from 'styled-components';
import useGoal from '../../../../hooks/useGoal';
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
  const { isValid, handleCreateGoal } = useGoal();
  const { createGoalToggle, handleCreateGoalToggle } = useToggle();
  const handleCreateBtn = createGoalToggle ? handleCreateGoal : handleCreateGoalToggle;
  return (
    <GoalContainer>
      <GoalTitle data={userData} />
      {!createGoalToggle ? (
        <Button size="lg" text="목표 추가하기" onClick={handleCreateBtn} />
      ) : (
        <>
          <GoalInput />
          <Button size="md" text="목표 추가하기" onClick={handleCreateBtn} disabled={!isValid} />
          <Button size="md" text="취소" onClick={handleCreateBtn} disabled={!isValid} />
        </>
      )}
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

const CreateButton = styled.button`
  width: 100%;
`;
