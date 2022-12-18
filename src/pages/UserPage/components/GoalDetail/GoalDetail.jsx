import styled from 'styled-components';
import UserMemo from './components/GoalMemo';
import UserTodo from './components/GoalTodo';

const GoalDetail = () => {
  return (
    <DetailContainer>
      <UserTodo />
      <UserMemo />
    </DetailContainer>
  );
};

export default GoalDetail;

const DetailContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
