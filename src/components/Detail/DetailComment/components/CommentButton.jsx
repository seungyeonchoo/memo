import styled from 'styled-components';
import useInput2 from '../../../../hooks/useInput2';
import useMutate from '../../../../hooks/useMutate';
import InputUtils from '../../../../utils/InputUtils';
import { AddButton } from '../../../Common/Button';
import Input from '../../../Common/Input';

const CommentButton = ({ todoId }) => {
  const initialComment = { ...InputUtils.initialComment, todoId: todoId };
  const { handleInput, initInput, inputValue } = useInput2(initialComment);
  const { handleMutation } = useMutate(`comments`, 'post', inputValue, initInput);

  return (
    <Wrapper>
      <Input
        type="text"
        size="medium"
        name="comment"
        placeholder="코멘트를 남겨주세요."
        onChange={handleInput}
        value={inputValue.comment}
      />
      <AddButton text="+" size="small" onClick={handleMutation} disabled={!inputValue.comment} />
    </Wrapper>
  );
};

export default CommentButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
