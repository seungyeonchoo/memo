import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useFetch from '../../../../hooks/useFetch';
import CommentItem from './CommentItem';

const CommentList = ({ todoId }) => {
  const { todoParams } = useSelector(state => state.param);
  const { data: todos } = useFetch(`todos/${todoId}`, todoParams, ['todos', { id: todoId }]);
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
