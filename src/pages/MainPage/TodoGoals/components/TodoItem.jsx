import useMutate from '../../../../hooks/useMutate';
import DateUtils from '../../../../utils/DateUtils';

const TodoItem = ({ goal }) => {
  const today = DateUtils.convert(new Date());
  const complete = { done: [...goal?.done, today] };
  const { handleMutation } = useMutate(`goals/${goal.id}`, 'patch', complete);
  return <li onClick={handleMutation}>{goal.goal_name}</li>;
};

export default TodoItem;
