import styled from 'styled-components';
import useCreate from '../../../../hooks/useCreate';
import useInput from '../../../../hooks/useInput';
import { AddButton } from '../../../Common/Button';
import Input from '../../../Common/Input';

const CommentButton = ({ todoId }) => {
  const { handleCreate: handleCreateCommnent } = useCreate('comments', todoId);
  const { handleInput: handleCommnetInput, commentInput } = useInput('comments');

  return (
    <Wrapper>
      <Input
        type="text"
        size="medium"
        name="comment"
        placeholder="코멘트를 남겨주세요."
        onChange={handleCommnetInput}
        value={commentInput.comment}
      />
      <AddButton
        text="+"
        size="small"
        onClick={handleCreateCommnent}
        disabled={!commentInput.comment}
      />
    </Wrapper>
  );
};

export default CommentButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
