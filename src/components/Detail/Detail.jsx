import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';
import TodoTitle from './DetailTodo/components/TodoTitle';
import DetailTodo from './DetailTodo/DetailTodo';

const Detail = () => {
  const { detailToggle } = useToggle();
  const { data: goal } = useFetch('goals', detailToggle.goal);

  return (
    <DetailContainer>
      <TodoTitle goal={goal} />
      <DetailTodo goal={goal} />
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e0e0;
  position: absolute;
  padding: 2em;
`;
