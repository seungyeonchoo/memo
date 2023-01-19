import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { user_id } from '../../utils/Storage';
import Calendar from './Calendar/Calendar';
import TodoList from './TodoGoals/components/TodoList';
import TodoTitle from './TodoGoals/components/TodoTitle';
import TodoGoals from './TodoGoals/TodoGoals';

const MainPage = () => {
  const { userParams } = useSelector(state => state.param);
  const { data } = useFetch(`users/${user_id}`, userParams, [
    'users',
    { id: user_id, _embed: 'goals' },
  ]);

  return (
    <MainContainer>
      <Calendar />
      <TodoGoals data={data} />
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  min-height: 70vh;
  margin: 3em 0;
`;
