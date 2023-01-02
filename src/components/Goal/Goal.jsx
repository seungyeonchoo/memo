import styled from 'styled-components';
import useParam from '../../hooks/useParam';
import useToggle from '../../hooks/useToggle';
import { Button } from '../Common/Button';
import Container from '../Common/Container';
import GoalInput from './GoalInput/GoalInput';
import GoalList from './GoalList/GoalList';

const Goal = ({ user }) => {
  const { checkUserId } = useParam();
  const { handleToggle, editGoalToggle, createGoalToggle } = useToggle('goals');
  const open = createGoalToggle || editGoalToggle;

  return (
    <Container>
      {open ? (
        <GoalInput />
      ) : (
        <>
          <TitleText>{user?.name}님의 목표</TitleText>
          {checkUserId && <Button size="large" text="목표추가" onClick={handleToggle} />}
          <GoalList />
        </>
      )}
    </Container>
  );
};

export default Goal;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 0.5em 0;
`;
