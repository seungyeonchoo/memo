import styled from 'styled-components';
import useDetail from '../../../../../hooks/useDetail';

const GoalTodo = () => {
  const { goal, input, handleTodoInput, handleCreateTodo } = useDetail();
  return (
    <TodoBox>
      <div>단기 목표</div>
      <InputWrapper>
        <input type="text" name="todo" value={input.todoInput.todo} onChange={handleTodoInput} />
        <button onClick={handleCreateTodo}>+</button>
      </InputWrapper>
      <div>{goal?.todos.map(el => el.todo)}</div>
    </TodoBox>
  );
};

export default GoalTodo;

const TodoBox = styled.section`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
`;
