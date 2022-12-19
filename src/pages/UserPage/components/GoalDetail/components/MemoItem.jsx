import styled from 'styled-components';

const MemoItem = ({ memo }) => {
  return (
    <Item>
      <div>{memo.date}</div>
      <div>{memo.memo}</div>
    </Item>
  );
};

export default MemoItem;

const Item = styled.li``;
