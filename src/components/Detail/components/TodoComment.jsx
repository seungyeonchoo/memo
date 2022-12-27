import styled from 'styled-components';
import useCreate from '../../../hooks/useCreate';
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import { AddButton, Button } from '../../Common/Button';
import Input from '../../Common/Input';
import CommentItem from './CommentItem';

const TodoComments = ({ id }) => {
  const { data } = useFetch('todos', id);
  const { handleCreate } = useCreate('comments', id);
  const { handleInput, commentInput } = useInput('comments');
  return (
    <CommentBox>
      <CommentWrapper>
        {data?.comments.map(el => (
          <CommentItem key={el.id} comment={el} />
        ))}
      </CommentWrapper>
      <InputWrapper>
        <Input
          type="text"
          size="medium"
          name="comment"
          placeholder="코멘트를 남겨주세요."
          onChange={handleInput}
          value={commentInput.comment}
        />
        <AddButton text="+" size="small" onClick={handleCreate} disabled={!commentInput.comment} />
      </InputWrapper>
    </CommentBox>
  );
};

export default TodoComments;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CommentWrapper = styled.div``;
