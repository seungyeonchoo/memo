import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';
import { user_id } from '../../utils/Storage';
import { Button } from '../Common/Button';
import GoalFilter from './GoalFilter/GoalFilter';
import GoalInput from './GoalInput/GoalInput';
import GoalItem from './GoalItem/GoalItem';

const Goal = ({ user }) => {
  const { id } = useParams();
  const { data: goals, isError } = useFetch('goals');
  const { handleToggle, editGoalToggle, createGoalToggle, detailToggle } = useToggle('goals');
  const open = createGoalToggle || editGoalToggle;

  return (
    <GoalContainer>
      <TitleText>{user?.name}님의 목표</TitleText>
      {open ? <GoalInput /> : <Button size="large" text="목표추가" onClick={handleToggle} />}
      {/* <GoalFilter /> */}
      {goals?.length === 0 && <div>아직 등록된 목표가 없습니다.</div>}
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
  margin-top: 1em;
`;
