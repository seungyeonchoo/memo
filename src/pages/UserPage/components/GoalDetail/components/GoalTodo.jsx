import styled from 'styled-components';
import Input from '../../../../../components/Common/Input';
import useDetail from '../../../../../hooks/useDetail';
import useToggle from '../../../../../hooks/useToggle';

const GoalTodo = () => {
  const { detailToggle } = useToggle();
  const { input, todoData, handleTodoInput, handleCreateTodo } = useDetail(detailToggle.goal);
  return (
    <TodoBox>
      <InputWrapper>
        <Input
          label="단기 목표"
          type="text"
          name="todo"
          value={input.todoInput.todo}
          placeholder="할일을 입력해 주세요."
          onChange={handleTodoInput}
        />
        <button onClick={handleCreateTodo}>+</button>
      </InputWrapper>
      <div>{todoData?.map(el => el.todo)}</div>
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
