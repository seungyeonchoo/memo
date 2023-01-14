import styled from 'styled-components';

const GoalText = ({ goal }) => {
  return (
    <TextWrapper>
      <Text>{goal.goal_name}</Text>
    </TextWrapper>
  );
};

export default GoalText;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p``;
