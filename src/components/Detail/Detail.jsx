import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';
import DetailTitle from './components/DetailTitle';
import DetailTodo from './components/DetailTodo';

const Detail = () => {
  const { detailToggle } = useToggle();
  const { data: goal } = useFetch('goals', detailToggle.goal);

  return (
    <DetailContainer>
      <DetailTitle goal={goal} />
      <DetailTodo goal={goal} />
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;
