import styled from 'styled-components';

const GoalInfo = ({ goal }) => {
  return (
    <InfoBox>
      <InfoText>{goal?.description}</InfoText>
      <InfoText>
        From {goal?.date} To {goal?.due_date}
      </InfoText>
    </InfoBox>
  );
};

export default GoalInfo;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
  font-size: 0.8em;
`;

const InfoText = styled.span``;
