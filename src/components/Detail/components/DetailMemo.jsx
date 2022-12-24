import styled from 'styled-components';
import useCreate from '../../../hooks/useCreate';
import useInput from '../../../hooks/useInput';
import Input from '../../Common/Input';

import MemoItem from './MemoItem';

const DetailMemo = ({ memos }) => {
  const { handleCreate } = useCreate('memos');
  const { handleInput, memoInput } = useInput('memos');
  return (
    <MemoBox>
      <InputWrapper>
        <Input
          label="메모"
          type="textarea"
          name="memo"
          value={memoInput.memo}
          placeholder="할일을 입력해 주세요."
          onChange={handleInput}
        />
        <button onClick={handleCreate}>+</button>
      </InputWrapper>
      <ul>
        {memos?.map(el => (
          <MemoItem key={el.id} memo={el} />
        ))}
      </ul>
    </MemoBox>
  );
};

export default DetailMemo;

const MemoBox = styled.section`
  display: flex;
  flex-direction: column;
  height: 400px;
`;

const InputWrapper = styled.div`
  display: flex;
`;
