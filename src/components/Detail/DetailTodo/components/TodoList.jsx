import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = ({ goal }) => {
  return (
    <TodoWrapper>
      {goal?.todos.map(el => (
        <TodoItem key={el.id} todo={el} />
      ))}
    </TodoWrapper>
  );
};

export default TodoList;

const TodoWrapper = styled.ul`
  height: 30vh;
  overflow: scroll;
`;
