import styled from 'styled-components';
import useParam from '../../../hooks/useParam';
import useToggle from '../../../hooks/useToggle';
import GoalStatus from './components/GoalStatus';
import GoalText from './components/GoalText';
import GoalButton from './components/GoalButton';

const GoalItem = ({ goal }) => {
  const { checkUserId } = useParam();
  const { handleToggle: handleDetailToggle } = useToggle('detail', goal);

  return (
    <GoalWrapper onClick={handleDetailToggle}>
      <GoalStatus goal={goal} />
      <GoalText goal={goal} />
      {checkUserId && <GoalButton goal={goal} />}
    </GoalWrapper>
  );
};

export default GoalItem;

const GoalWrapper = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 20rem;
  padding: 0.5em 2em;
  font-size: 0.8em;
  cursor: pointer;
  background-color: #e0e0e0;
  && {
    margin-bottom: 0.5em;
  }
`;
