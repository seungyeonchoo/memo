import styled from 'styled-components';
import useCreate from '../../../hooks/useCreate';
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import { AddButton, Button } from '../../Common/Button';
import Input from '../../Common/Input';

const TodoComments = ({ id }) => {
  const { data } = useFetch('todos', id);
  const { handleCreate } = useCreate('comments', id);
  const { handleInput, commentInput } = useInput('comments');
  return (
    <CommentBox>
      <InputWrapper>
        <Input
          type="text"
          size="medium"
          name="comment"
          onChange={handleInput}
          value={commentInput.comment}
        />
        <AddButton text="+" size="small" onClick={handleCreate} />
      </InputWrapper>
      <ul>
        {data?.comments.map(el => (
          <li>{el.comment}</li>
        ))}
      </ul>
    </CommentBox>
  );
};

export default TodoComments;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
