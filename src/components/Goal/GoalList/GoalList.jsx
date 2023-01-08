import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import { goalParamsChange } from '../../../store/slices/paramSlice';
import GoalItem from '../GoalItem/GoalItem';

const GoalList = ({ user }) => {
  const { id } = useParams();
  const { setGlobalInput } = useInput({ userId: id }, goalParamsChange);
  const { goalParams } = useSelector(state => state.param);
  const query_key = ['goals', { userId: id }];
  const { data } = useFetch('goals', goalParams, query_key, setGlobalInput);

  return (
    <ListWrapper>
      {user?.goals.length === 0 && <div>아직 등록된 목표가 없습니다.</div>}
      {user?.goals.map(goal => (
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
