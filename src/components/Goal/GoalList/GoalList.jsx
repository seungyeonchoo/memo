import styled from 'styled-components';
import GoalUtils from '../../../utils/GoalUtils';
import GoalItem from '../GoalItem/GoalItem';

const GoalList = ({ user, type }) => {
  const goals =
    type === 'users' ? GoalUtils.sortItems(user?.goals) : GoalUtils.sortItems(user?.groupGoals);
  return (
    <ListWrapper>
      {goals?.length === 0 && <div>아직 등록된 목표가 없습니다.</div>}
      {goals?.map(el => (
        <GoalItem key={el.id} goal={el} />
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
