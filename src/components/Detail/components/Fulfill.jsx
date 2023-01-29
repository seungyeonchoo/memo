import styled from 'styled-components';

const Fulfill = ({ goal, date, idx }) => {
  return (
    <Item>
      <Text>
        {goal?.repeat === 'Daily' ? 'Day' : 'Week'} {idx + 1}
      </Text>
      <Text>{date}</Text>
      <Text>{goal?.done.includes(date) ? 'success' : 'failure'}</Text>
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
`;

const Text = styled.span`
  width: 30%;
`;
