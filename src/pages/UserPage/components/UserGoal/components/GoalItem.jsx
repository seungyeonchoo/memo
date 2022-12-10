import styled from 'styled-components';
import useGoal from '../../../../../hooks/useGoal';
import useToggle from '../../../../../hooks/useToggle';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import calcDiffDay from '../../../../../utils/calcDiffDay';

const GoalItem = ({ goal }) => {
  const { handleEditGoalToggle, editGoalToggle, createGoalToggle } = useToggle(goal);
  const { handleDelete, handleIsComplete } = useGoal(goal.id);
  const color = goal.is_complete ? '#cfd8dc' : '#eceff1';

  return (
    <Item key={goal.id} bg={color}>
      <button onClick={handleIsComplete}>
        {goal.is_complete ? '완료' : `D-${calcDiffDay(goal.due_date)}`}
      </button>
      <TextWrapper>
        <Text>{goal.due_date}까지</Text>
        <Text>{goal.goal_name}</Text>
        <Text>{goal.description}</Text>
      </TextWrapper>
      <ButtonWrapper>
        <Button onClick={handleEditGoalToggle} disabled={editGoalToggle || createGoalToggle}>
          <AiFillEdit />
        </Button>
        <Button onClick={handleDelete}>
          <AiFillDelete />
        </Button>
      </ButtonWrapper>
    </Item>
  );
};

// goal.is_complete가 true?
// true라면 style을 다르게 설정

export default GoalItem;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 410px;
  padding: 10px;
  border: 1px solid black;
  background-color: ${props => props.bg};
  && {
    margin-bottom: 0.5em;
  }
`;
const TextWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p``;

const Button = styled.button`
  background-color: transparent;
  border: none;
`;
