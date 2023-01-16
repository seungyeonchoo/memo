import { useSelector } from 'react-redux';
import useFetch from '../../../../hooks/useFetch';
import GoalUtils from '../../../../utils/GoalUtils';
import { user_id } from '../../../../utils/Storage';

const DateStatus = ({ name, week }) => {
  const { userParams } = useSelector(state => state.param);
  const { data } = useFetch(`users/${user_id}`, userParams, ['users', { id: user_id }]);
  const total = GoalUtils.filterGoalsOfDate(data?.goals, name);
  const isDone = total?.filter(el => el.done.includes(el.repeat === 'Daily' ? name : week)).length;

  return (
    <div>{!total?.length ? '-' : isDone === total?.length ? '**' : total?.length - isDone}</div>
  );
};

export default DateStatus;
