import styled from 'styled-components';
import useGoal from '../../../../hooks/useGoal';
import useToggle from '../../../../hooks/useToggle';
import useUser from '../../../../hooks/useUser';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import GoalTitle from './components/GoalTitle';

const UserGoal = () => {
  const { userData } = useUser();
  const { createNewGoal } = useGoal();
  const { addGoal, handleAddGoal } = useToggle();
  const handleCreateGoal = addGoal ? createNewGoal : handleAddGoal;
  return (
    <GoalContainer>
      <GoalTitle data={userData} />
      {addGoal && <GoalInput />}
      <CreateButton onClick={handleCreateGoal}>목표 추가하기</CreateButton>
      <GoalItem data={userData} />
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
