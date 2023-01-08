import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = ({ goal }) => {
  console.log(goal);
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
  height: 37vh;
  overflow: scroll;
`;
