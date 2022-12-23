import styled from 'styled-components';
import useDelete from '../../../hooks/useDelete';

const MemoItem = ({ memo }) => {
  const { handleDelete } = useDelete('memos', memo.id);
  return (
    <Item>
      <div>{memo.date}</div>
      <div>{memo.memo}</div>
      <button onClick={handleDelete}>삭제</button>
    </Item>
  );
};

export default MemoItem;

const Item = styled.li``;
