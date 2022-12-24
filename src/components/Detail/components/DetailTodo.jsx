import styled from 'styled-components';
import useCheck from '../../../hooks/useCheck';
import useCreate from '../../../hooks/useCreate';
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import checkIsCompleted from '../../../utils/checkIsCompleted';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import TodoItem from './TodoItem';

const DetailTodo = ({ goal }) => {
  const { handleCreate } = useCreate('todos');
  const { handleInput, todoInput } = useInput('todos');
  const { handleIsComplete } = useCheck('goals', goal?.id);

  return (
    <TodoBox>
      <InputWrapper>
        <Input
          label="단기 목표"
          type="text"
          name="todo"
          value={todoInput.todo}
          placeholder="할일을 입력해 주세요."
          onChange={handleInput}
        />
        <button onClick={handleCreate}>+</button>
      </InputWrapper>
      <TodoWrapper>
        {goal?.todos.map(el => (
          <TodoItem key={el.id} todo={el} />
        ))}
      </TodoWrapper>
      <Button text="완료" onClick={handleIsComplete} disabled={!checkIsCompleted(goal)} />
      {/* button is disabled if every todos aren't completed yet */}
      {/* onClick -> goal.is_complete = true(patch) */}
    </TodoBox>
  );
};

export default DetailTodo;

const TodoBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TodoWrapper = styled.ul`
  overflow: scroll;
`;
