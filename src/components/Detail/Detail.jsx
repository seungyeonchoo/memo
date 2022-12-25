import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';
import DetailMemo from './components/DetailMemo';
import DetailTitle from './components/DetailTitle';
import DetailTodo from './components/DetailTodo';

const Detail = () => {
  const { detailToggle } = useToggle();
  const { data: goal } = useFetch('goals', detailToggle.goal);
  const { data: memos } = useFetch('memos');

  return (
    <DetailContainer>
      <DetailTitle goal={goal} />
      <DetailTodo goal={goal} />
      {/* <DetailMemo memos={memos} /> */}
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 500px;
`;
