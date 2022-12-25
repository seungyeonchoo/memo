import styled from 'styled-components';
import useCheck from '../../../hooks/useCheck';
import useDelete from '../../../hooks/useDelete';
import usePatch from '../../../hooks/usePatch';
import useToggle from '../../../hooks/useToggle';
import TodoComments from './TodoComment';

const TodoItem = ({ todo }) => {
  const { handleDelete } = useDelete('todos', todo.id);
  const { handleIsComplete } = useCheck('todos', todo.id);
  const { handleUpdates } = usePatch('todos', todo);
  //   const { handleToggle, commentToggle } = useToggle('comments');
  return (
    <Item>
      <CheckBox type="checkbox" onChange={handleIsComplete} checked={todo?.is_complete} />
      <ItemText>{todo.todo}</ItemText>
      <Button onClick={handleUpdates}>코멘트</Button>
      {/* 버튼 클릭하면 메모 토글 => todo의 메모 불러오기 */}
      <Button onClick={handleDelete}>삭제</Button>
      {todo?.comment_toggle && <TodoComments />}
    </Item>
  );
};

export default TodoItem;

const Item = styled.li`
  display: flex;
  width: 380px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  margin: 1em;
  padding: 0 1em;
  cursor: pointer;
`;

const CheckBox = styled.input`
  border: 0;
  cursor: pointer;
  /* clip: rect(0 0 0 0); */
  /* position: absolute; */
`;

const ItemText = styled.div`
  font-size: 0.8rem;
  width: 70%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
