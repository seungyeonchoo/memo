import styled from 'styled-components';
import useCreate from '../../../hooks/useCreate';
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import Input from '../../Common/Input';
import TodoItem from './TodoItem';

const DetailTodo = () => {
  const { data: todos } = useFetch('todos');
  const { handleCreate } = useCreate('todos');
  const { handleInput, todoInput } = useInput('todos');
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
      <ul>
        {todos?.map(el => (
          <TodoItem key={el.id} todo={el} />
        ))}
      </ul>
    </TodoBox>
  );
};

export default DetailTodo;

const TodoBox = styled.section`
  display: flex;
  flex-direction: column;
  height: 300px;
`;

const InputWrapper = styled.div`
  display: flex;
`;
