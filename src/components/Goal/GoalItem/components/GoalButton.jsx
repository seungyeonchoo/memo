import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../../../hooks/useInput';
import useMutate from '../../../../hooks/useMutate';
import useToggle from '../../../../hooks/useToggle';
import { goalInputChange } from '../../../../store/slices/inputSlice';
import { editToggleChange } from '../../../../store/slices/toggleSlice';

const GoalButton = ({ goal }) => {
  const { editToggle, createToggle } = useSelector(state => state.toggle);
  const { setGlobalInput } = useInput(goal, goalInputChange);
  const { handleGlobalToggle } = useToggle(editToggleChange, setGlobalInput);
  const { handleMutation } = useMutate(`goals/${goal?.id}`, 'delete');

  return (
    <ButtonWrapper>
      <Button onClick={handleGlobalToggle} disabled={editToggle || createToggle}>
        <AiFillEdit />
      </Button>
      <Button onClick={handleMutation}>
        <AiFillDelete />
      </Button>
    </ButtonWrapper>
  );
};

// 수정버튼 클릭했을 때 input에 기존값 가져오기
// goal id를 어떻게 전달할지?

export default GoalButton;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
