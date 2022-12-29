import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useCheck from '../../../../hooks/useCheck';
import useDelete from '../../../../hooks/useDelete';
import useParam from '../../../../hooks/useParam';
import usePatch from '../../../../hooks/usePatch';
import DetailComment from '../../DetailComment/DetailComment';

const TodoItem = ({ todo }) => {
  const { checkUserId } = useParam();
  const { handleDelete } = useDelete('todos', todo.id);
  const { handleIsComplete } = useCheck('todos', todo.id);
  const { handleUpdates } = usePatch('todos', todo);
  //   const { handleToggle, commentToggle } = useToggle('comments');
  return (
    <>
      <TodoWrapper>
        <CheckBox type="checkbox" onChange={handleIsComplete} checked={todo?.is_complete} />
        <ItemText>{todo.todo}</ItemText>
        <Button onClick={handleUpdates}>코멘트</Button>
        {checkUserId && <Button onClick={handleDelete}>삭제</Button>}
      </TodoWrapper>
      {todo?.comment_toggle && <DetailComment todoId={todo.id} />}
    </>
  );
};

export default TodoItem;

const TodoWrapper = styled.li`
  display: flex;
  width: 20rem;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  margin: 0.5em 0;
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
