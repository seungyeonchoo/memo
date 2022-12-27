import styled from 'styled-components';
import useCheck from '../../../hooks/useCheck';
import useCreate from '../../../hooks/useCreate';
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import checkIsCompleted from '../../../utils/checkIsCompleted';
import { AddButton, Button } from '../../Common/Button';
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
          type="text"
          name="todo"
          size="large"
          placeholder="할일을 입력해 주세요."
          value={todoInput.todo}
          onChange={handleInput}
        />
        <AddButton text="+" size="small" onClick={handleCreate} disabled={!todoInput.todo} />
      </InputWrapper>
      <TodoWrapper>
        {goal?.todos.map(el => (
          <TodoItem key={el.id} todo={el} />
        ))}
      </TodoWrapper>
      <Button
        text="완료"
        size="large"
        onClick={handleIsComplete}
        disabled={!checkIsCompleted(goal)}
      />
    </TodoBox>
  );
};

export default DetailTodo;

const TodoBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 400px; */
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoWrapper = styled.ul`
  overflow: scroll;
  height: 400px;
`;
