import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Container from '../Common/Container';
import TodoTitle from './DetailTodo/components/TodoTitle';
import DetailTodo from './DetailTodo/DetailTodo';

const Detail = () => {
  const { goalInput } = useSelector(state => state.input);
  const { data: goal } = useFetch('goals', goalInput.id);

  return (
    <Container>
      <TodoTitle goal={goal} />
      <DetailTodo goal={goal} />
    </Container>
  );
};

export default Detail;
