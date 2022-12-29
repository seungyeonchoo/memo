import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import GoalItem from '../GoalItem/GoalItem';

const GoalList = () => {
  const { data: goals } = useFetch('goals');

  return (
    <ListWrapper>
      {goals?.length === 0 && <div>아직 등록된 목표가 없습니다.</div>}
      {goals?.map(goal => (
        <GoalItem key={goal.id} goal={goal} />
      ))}
    </ListWrapper>
  );
};

export default GoalList;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
