import styled from 'styled-components';
import useCreate from '../../../../hooks/useCreate';
import useInput from '../../../../hooks/useInput';
import { AddButton } from '../../../Common/Button';
import Input from '../../../Common/Input';

const TodoInput = () => {
  const { todoInput, handleInput: handleTodoInput } = useInput('todos');
  const { handleCreate: handleCreateTodo } = useCreate('todos');
  return (
    <Wrapper>
      <Input
        type="text"
        name="todo"
        size="large"
        placeholder="할일을 입력해 주세요."
        value={todoInput.todo}
        onChange={handleTodoInput}
      />
      <AddButton text="+" size="small" onClick={handleCreateTodo} disabled={!todoInput.todo} />
    </Wrapper>
  );
};

export default TodoInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
