import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';
import Container from '../Common/Container';
import TodoTitle from './DetailTodo/components/TodoTitle';
import DetailTodo from './DetailTodo/DetailTodo';

const Detail = () => {
  const { detailToggle } = useToggle();
  const { data: goal } = useFetch('goals', detailToggle.goal);

  return (
    <Container>
      <TodoTitle goal={goal} />
      <DetailTodo goal={goal} />
    </Container>
  );
};

export default Detail;
