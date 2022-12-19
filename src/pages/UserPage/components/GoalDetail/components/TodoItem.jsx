import styled from 'styled-components';

const TodoItem = ({ todo }) => {
  return (
    <Item>
      <input type="checkbox" />
      <div>{todo.todo}</div>
      <button>삭제</button>
    </Item>
  );
};

export default TodoItem;

const Item = styled.li`
  display: flex;
`;
