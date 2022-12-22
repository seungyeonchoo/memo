import styled from 'styled-components';
import useCheck from '../../../../../hooks/useCheck';
import useDelete from '../../../../../hooks/useDelete';

const TodoItem = ({ todo }) => {
  const { handleDelete } = useDelete('todos', todo.id);
  const { handleIsComplete } = useCheck('todos', todo.id);
  return (
    <Item>
      <input type="checkbox" onChange={handleIsComplete} checked={todo?.is_complete} />
      <div>{todo.todo}</div>
      <button onClick={handleDelete}>삭제</button>
    </Item>
  );
};

export default TodoItem;

const Item = styled.li`
  display: flex;
`;
