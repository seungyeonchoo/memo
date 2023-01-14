import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { user_id } from '../../utils/Storage';
import Calendar from './Calendar/Calendar';
import TodoList from './TodoGoals/components/TodoList';

const MainPage = () => {
  const { userParams } = useSelector(state => state.param);
  const { data } = useFetch(`users/${user_id}`, userParams, ['users', { id: user_id }]);

  return (
    <MainContainer>
      <Calendar />
      <List>
        <TodoList user={data} repeat="Daily" />
        <TodoList user={data} repeat="Weekly" />
      </List>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  min-height: 70vh;
  margin: 3em 0;
`;

const List = styled.div``;
