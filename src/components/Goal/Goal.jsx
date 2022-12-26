import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';
import { Button } from '../Common/Button';
import GoalFilter from './GoalFilter/GoalFilter';
import GoalInput from './GoalInput/GoalInput';
import GoalItem from './GoalItem/GoalItem';

const Goal = ({ user }) => {
  const { data: goals } = useFetch('goals');
  const { handleToggle, editGoalToggle, createGoalToggle, detailToggle } = useToggle('goals');
  const open = createGoalToggle || editGoalToggle;

  return (
    <GoalContainer>
      <TitleText>{user?.name}님의 목표</TitleText>
      {open ? <GoalInput /> : <Button size="large" text="목표추가" onClick={handleToggle} />}
      <GoalFilter />
      <ItemBox>
        {goals?.map(el => (
          <GoalItem key={el.id} item={el} />
        ))}
      </ItemBox>
    </GoalContainer>
  );
};

export default Goal;

const GoalContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-bottom: 1em;
  padding: 0 1em;
  position: relative;
`;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: scroll;
`;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5em 0 0 0;
  text-align: left;
`;
