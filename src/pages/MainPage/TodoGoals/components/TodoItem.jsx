import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useMutate from '../../../../hooks/useMutate';
import DateUtils from '../../../../utils/DateUtils';

const TodoItem = ({ goal }) => {
  const { dateInfo } = useSelector(state => state.input);
  const today = DateUtils.convert(new Date()) === dateInfo.date;
  const done = goal?.done.includes(goal.repeat === 'Daily' ? dateInfo.date : dateInfo.week);
  const { handleMutation } = useMutate(`goals/${goal.id}`, 'patch', {
    done: [...goal?.done, goal.repeat === 'Daily' ? dateInfo.date : dateInfo.week, dateInfo.date],
  });

  // done => change to object

  return (
    <Item done={done} onClick={today && !done ? handleMutation : undefined}>
      <DateInfo>{DateUtils.diffDate(goal.date, dateInfo.date)}</DateInfo>
      <ItemText>{goal.goal_name}</ItemText>
    </Item>
  );
};

export default TodoItem;

const Item = styled.li`
  background-color: ${props => (props.done ? '#ffcdd2' : '#e0e0e0')};
  cursor: ${props => (props.done ? 'pointer' : null)};
  /* color: #fff; */
  border: 1px solid #666;
  display: flex;
  justify-content: space-around;
  width: 70%;
  text-align: center;
  padding: 0.8em;
  margin: 0.5em;
  font-size: 0.8em;
  font-weight: bold;
  border-radius: 10px;
`;

const DateInfo = styled.span`
  width: 20%;
`;

const ItemText = styled.span`
  width: 80%;
`;
