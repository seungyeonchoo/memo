import styled from 'styled-components';
import useCheck from '../../../hooks/useCheck';
import useDelete from '../../../hooks/useDelete';

const TodoItem = ({ todo }) => {
  const { handleDelete } = useDelete('todos', todo.id);
  const { handleIsComplete } = useCheck('todos', todo.id);
  return (
    <Item>
      <CheckBox type="checkbox" onChange={handleIsComplete} checked={todo?.is_complete} />
      <div>{todo.todo}</div>
      <button onClick={handleDelete}>x</button>
    </Item>
  );
};

export default TodoItem;

const Item = styled.li`
  display: flex;
`;

const CheckBox = styled.input`
  border: 0;
  /* clip: rect(0 0 0 0); */
  /* position: absolute; */
`;
