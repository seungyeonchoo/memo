import styled from 'styled-components';
import useFetch from '../../../../hooks/useFetch';
import CommentItem from './CommentItem';

const CommentList = ({ todoId }) => {
  const { data: todos } = useFetch('todos', todoId);
  return (
    <ListWrapper>
      {todos?.comments.map(el => (
        <CommentItem key={el.id} comment={el} />
      ))}
    </ListWrapper>
  );
};

export default CommentList;

const ListWrapper = styled.ul``;
