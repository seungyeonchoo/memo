import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import DateUtils from '../../utils/DateUtils';
import Container from '../Common/Container';

const Detail = () => {
  const { input, param } = useSelector(state => state);
  const id = input.goalInput.id;
  const { data: goal } = useFetch(`goals/${id}`, param.goalParams, ['goals', { id: id }]);

  const dateList = DateUtils.getDateList(goal?.date, goal?.due_date, goal?.repeat);

  return (
    <Container>
      {dateList.map(el => (
        <div key={el}>{goal?.done.includes(el) ? 'done : ' + el : el}</div>
      ))}
    </Container>
  );
};

export default Detail;
