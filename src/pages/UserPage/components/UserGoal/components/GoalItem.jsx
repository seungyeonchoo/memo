import styled from 'styled-components';
import useGoal from '../../../../../hooks/useGoal';
import useToggle from '../../../../../hooks/useToggle';

const GoalItem = ({ goal }) => {
  const { handleEditGoalToggle, editGoalToggle, createGoalToggle } = useToggle(goal);
  const { handleDelete, handleIsComplete } = useGoal(goal.id);
  const color = goal.is_complete ? '#cfd8dc' : '#eceff1';

  return (
    <Item key={goal.id} bg={color}>
      <button onClick={handleIsComplete}>완료</button>
      <TextWrapper>
        <Text>{goal.due_date}까지</Text>
        <Text>{goal.goal_name}</Text>
        <Text>{goal.description}</Text>
      </TextWrapper>
      <ButtonWrapper>
        <button onClick={handleEditGoalToggle} disabled={editGoalToggle || createGoalToggle}>
          수정
        </button>
        <button onClick={handleDelete}>삭제</button>
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
`;

const Text = styled.p``;
