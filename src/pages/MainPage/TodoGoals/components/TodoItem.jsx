import { useSelector } from 'react-redux';
import useMutate from '../../../../hooks/useMutate';
import DateUtils from '../../../../utils/DateUtils';

const TodoItem = ({ goal }) => {
  const { dateInfo } = useSelector(state => state.input);
  const today = goal.repeat === 'Daily' ? DateUtils.convert(new Date()) === dateInfo.date : null;
  const done = goal?.done.includes(goal.repeat === 'Daily' ? dateInfo.date : dateInfo.week);
  const { handleMutation } = useMutate(`goals/${goal.id}`, 'patch', {
    done: [...goal?.done, goal.repeat === 'Daily' ? dateInfo.date : dateInfo.week],
  });

  return (
    <li onClick={today && !done ? handleMutation : undefined}>
      {done ? `*${goal.goal_name}` : goal.goal_name}
    </li>
  );
};

export default TodoItem;
