import styled from 'styled-components';
import useInput from '../../../../hooks/useInput';
import useMutate from '../../../../hooks/useMutate';
import InputUtils from '../../../../utils/InputUtils';
import { AddButton } from '../../../Common/Button';
import Input from '../../../Common/Input';

const initialTodo = InputUtils.initialTodo;

const TodoInput = ({ id }) => {
  const { handleInput, initInput, inputValue } = useInput({ ...initialTodo, goalId: id });
  const { handleMutation } = useMutate('todos', 'post', inputValue, initInput);
  // goalId 값을 prop으로 제대로 받아오기
  //   if (id === undefined) return <div>loading...</div>;

  return (
    <Wrapper>
      <Input
        type="text"
        name="todo"
        size="large"
        placeholder="할일을 입력해 주세요."
        value={inputValue?.todo}
        onChange={handleInput}
      />
      <AddButton text="+" size="small" onClick={handleMutation} disabled={!inputValue?.todo} />
    </Wrapper>
  );
};

export default TodoInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
