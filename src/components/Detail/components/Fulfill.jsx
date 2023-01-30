import styled from 'styled-components';

const Fulfill = ({ goal, date, idx }) => {
  const isComplete = goal?.done.includes(date);

  return (
    <Item complete={isComplete}>
      <Text>{goal?.repeat === 'Daily' ? `Day${idx + 1}` : `Week${idx + 1}`}</Text>
      <Text>{date}</Text>
      <Text>{isComplete ? 'complete' : 'failure'}</Text>
    </Item>
  );
};

export default Fulfill;

const Item = styled.li`
  text-align: center;
  width: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
  color: ${props => (props.complete ? 'blue' : 'red')};
`;

const Text = styled.span`
  width: 30%;
`;
