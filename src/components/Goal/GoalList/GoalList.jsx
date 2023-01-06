import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import GoalItem from '../GoalItem/GoalItem';

const GoalList = ({ handleToggle, toggle }) => {
  const { data: goals } = useFetch('goals');

  return (
    <ListWrapper>
      {goals?.length === 0 && <div>아직 등록된 목표가 없습니다.</div>}
      {goals?.map(goal => (
        <GoalItem key={goal.id} goal={goal} handleToggle={handleToggle} toggle={toggle} />
      ))}
    </ListWrapper>
  );
};

export default GoalList;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  background-color: #fff;
  padding: 1em;
  min-width: 87%;
  min-height: 45vh;
  border-radius: 10px;
`;
