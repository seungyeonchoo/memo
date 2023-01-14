import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Container from '../Common/Container';
import TodoTitle from './DetailTodo/components/TodoTitle';
import DetailTodo from './DetailTodo/DetailTodo';

const Detail = () => {
  const { input, param } = useSelector(state => state);
  const id = input.goalInput.id;
  const { data: goal } = useFetch(`goals/${id}`, param.goalParams, ['goals', { id: id }]);
  return (
    <Container>
      {/* <TodoTitle goal={goal} />
      <DetailTodo goal={goal} /> */}
    </Container>
  );
};

export default Detail;
