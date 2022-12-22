import styled from 'styled-components';
import useFetch from '../../../../hooks/useFetch';
import useToggle from '../../../../hooks/useToggle';
import DetailTitle from './components/DetaillTitle';
import UserMemo from './components/GoalMemo';
import UserTodo from './components/GoalTodo';

const GoalDetail = () => {
  return (
    <DetailContainer>
      <DetailTitle />
      <UserTodo />
      <UserMemo />
    </DetailContainer>
  );
};

export default GoalDetail;

const DetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 440px;
`;
