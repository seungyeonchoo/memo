import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import DateUtils from '../../utils/DateUtils';
import Container from '../Common/Container';
import TodoTitle from './DetailTodo/components/TodoTitle';
import DetailTodo from './DetailTodo/DetailTodo';

const Detail = () => {
  const { input, param } = useSelector(state => state);
  const id = input.goalInput.id;
  const { data: goal } = useFetch(`goals/${id}`, param.goalParams, ['goals', { id: id }]);

  const dateList = DateUtils.getDateList(goal?.date, goal?.due_date);

  console.log(goal?.date, goal?.due_date, dateList);

  return (
    <Container>
      {dateList.map(el => (
        <div>{goal?.done.includes(el) ? 'done : ' + el : el}</div>
      ))}
      {/* <TodoTitle goal={goal} />
      <DetailTodo goal={goal} /> */}
    </Container>
  );
};

export default Detail;
