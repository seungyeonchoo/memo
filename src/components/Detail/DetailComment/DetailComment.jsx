import styled from 'styled-components';
import CommentButton from './components/CommentButton';
import CommentList from './components/CommentList';

const DetailComment = ({ todoId }) => {
  return (
    <CommentBox>
      <CommentList todoId={todoId} />
      <CommentButton todoId={todoId} />
    </CommentBox>
  );
};

export default DetailComment;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
`;
