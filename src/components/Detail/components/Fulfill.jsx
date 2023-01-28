import styled from 'styled-components';

const Fulfill = ({ goal, date, idx }) => {
  return (
    <Item>
      <span>Day {idx + 1}</span>
      <span>{date}</span>
      <span>{goal?.done.includes(date) ? 'success' : 'failure'}</span>
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
