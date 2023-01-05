import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import styled from 'styled-components';
import useMutate from '../../../../hooks/useMutate';
import useToggle from '../../../../hooks/useToggle';

const GoalButton = ({ goal }) => {
  const { handleToggle, editGoalToggle, createGoalToggle } = useToggle('edit', goal);
  const { handleMutation } = useMutate(`goals/${goal?.id}`, 'delete');
  return (
    <ButtonWrapper>
      <Button onClick={handleToggle} disabled={editGoalToggle || createGoalToggle}>
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
