import styled from 'styled-components';
import useParam from '../../hooks/useParam';
import useToggle from '../../hooks/useToggle';
import { Button } from '../Common/Button';
import GoalInput from './GoalInput/GoalInput';
import GoalList from './GoalList/GoalList';

const Goal = ({ user }) => {
  const { checkUserId } = useParam();
  const { handleToggle, editGoalToggle, createGoalToggle, detailToggle } = useToggle('goals');
  const open = createGoalToggle || editGoalToggle;

  return (
    <GoalContainer>
      <TitleText>{user?.name}님의 목표</TitleText>
      {checkUserId &&
        (open ? <GoalInput /> : <Button size="large" text="목표추가" onClick={handleToggle} />)}
      {/* <GoalFilter /> */}
      <GoalList />
    </GoalContainer>
  );
};

export default Goal;

const GoalContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 70vh; */
`;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 2em;
`;
