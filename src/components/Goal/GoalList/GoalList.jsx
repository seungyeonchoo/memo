import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GoalItem from '../GoalItem/GoalItem';

const GoalList = ({ user, type }) => {
  const goalType = type === 'users' ? user?.goals : user?.groupGoals;

  return (
    <ListWrapper>
      {goalType?.length === 0 && <div>아직 등록된 목표가 없습니다.</div>}
      {goalType
        ?.sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
        .map(goal => (
          <GoalItem key={goal.id} goal={goal} />
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
