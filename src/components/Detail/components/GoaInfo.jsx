import styled from 'styled-components';

const GoalInfo = ({ goal }) => {
  return (
    <InfoBox>
      <span>{goal?.description}</span>
      <span>
        From {goal?.date} To {goal?.due_date}
      </span>
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
  line-height: 1.5em;
`;
