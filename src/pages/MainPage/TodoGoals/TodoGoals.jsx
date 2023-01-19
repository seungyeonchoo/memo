import styled from 'styled-components';
import useToggle from '../../../hooks/useToggle';
import Diary from './components/Diary';
import TodoList from './components/TodoList';
import TodoTitle from './components/TodoTitle';

const TodoGoals = ({ data }) => {
  const { toggle, handleToggle } = useToggle();

  return (
    <Container>
      <TodoTitle toggle={toggle} handleToggle={handleToggle} />
      {!toggle ? (
        <>
          <TodoList user={data} repeat="Daily" />
          <TodoList user={data} repeat="Weekly" />
        </>
      ) : (
        <Diary />
      )}
    </Container>
  );
};

export default TodoGoals;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 500px;
  margin: 0 4rem;
  border-bottom: 1px solid #666;
`;
