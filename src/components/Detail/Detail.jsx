import styled from 'styled-components';
import DetailMemo from './components/DetailMemo';
import DetailTitle from './components/DetailTitle';
import DetailTodo from './components/DetailTodo';

const Detail = () => {
  return (
    <DetailContainer>
      <DetailTitle />
      <DetailTodo />
      <DetailMemo />
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 440px;
`;
