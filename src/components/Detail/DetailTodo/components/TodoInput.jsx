import styled from 'styled-components';
import useCreate from '../../../../hooks/useCreate';
import useInput from '../../../../hooks/useInput';
import useInput2 from '../../../../hooks/useInput2';
import useToggle from '../../../../hooks/useToggle';
import InputUtils from '../../../../utils/InputUtils';
import { AddButton } from '../../../Common/Button';
import Input from '../../../Common/Input';

const TodoInput = () => {
  const { detailToggle } = useToggle();
  const initialTodo = { ...InputUtils.initialTodo, goalId: detailToggle.goal };
  const { handleInput, handleMutation, inputValue } = useInput2('todos', 'post', initialTodo);

  return (
    <Wrapper>
      <Input
        type="text"
        name="todo"
        size="large"
        placeholder="할일을 입력해 주세요."
        value={inputValue.todo}
        onChange={handleInput}
      />
      <AddButton text="+" size="small" onClick={handleMutation} disabled={!inputValue.todo} />
    </Wrapper>
  );
};

export default TodoInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
