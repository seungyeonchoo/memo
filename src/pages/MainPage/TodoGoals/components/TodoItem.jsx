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
    <Item onClick={today && !done ? handleMutation : undefined}>
      <DateInfo>{DateUtils.diffDate(goal.date, dateInfo.date)}</DateInfo>
      <ItemText>{done ? `*${goal.goal_name}` : goal.goal_name}</ItemText>
    </Item>
  );
};

export default TodoItem;

const Item = styled.li`
  background-color: #eeeeee;
  /* color: #fff; */
  /* border: 1px solid #666; */
  display: flex;
  justify-content: space-around;
  width: 90%;
  text-align: center;
  padding: 0.5em;
  margin: 0.3em;
  font-size: 0.8em;
  cursor: pointer;
`;

const DateInfo = styled.span`
  width: 30%;
`;

const ItemText = styled.span`
  width: 60%;
`;
