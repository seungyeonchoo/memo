import useCreate from '../../../hooks/useCreate';
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import Button from '../../Common/Button';
import Input from '../../Common/Input';

const TodoComments = ({ id }) => {
  const { data } = useFetch('todos', id);
  const { handleCreate } = useCreate('comments', id);
  const { handleInput, commentInput } = useInput('comments');
  return (
    <>
      <div>
        <Input
          type="text"
          size="medium"
          name="comment"
          onChange={handleInput}
          value={commentInput.comment}
        />
        <Button text="+" size="small" onClick={handleCreate} />
      </div>
      <div>{data?.comments.map(el => el.comment)}</div>
    </>
  );
};

export default TodoComments;
