import styled from 'styled-components';
import useToggle from '../../../../hooks/useToggle';
import GoalInput from './components/GoalInput';
import GoalTitle from './components/GoalTitle';
import GoalBox from './components/GoalBox';
import Button from '../../../../components/Common/Button';
import GoalFilters from './components/GoalFilters';
import useFetch from '../../../../hooks/useFetch';

const UserGoal = () => {
  const { data: goals } = useFetch('goals');
  const { data: user } = useFetch('users');
  const { handleToggle, editGoalToggle, createGoalToggle } = useToggle('goals');
  const open = createGoalToggle || editGoalToggle;

  return (
    <GoalContainer>
      <GoalTitle user={user} />
      {open && <GoalInput />}
      {!open && <Button size="lg" text="목표추가" onClick={handleToggle} />}
      <GoalFilters />
      <GoalBox goals={goals} />
    </GoalContainer>
  );
};

export default UserGoal;

const GoalContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
  padding: 0 1em;
`;
