import styled from 'styled-components';
import Input from '../../../../../components/Common/Input';
import useDetail from '../../../../../hooks/useDetail';
import useToggle from '../../../../../hooks/useToggle';
import MemoItem from './MemoItem';

const GoalMemo = () => {
  const { detailToggle } = useToggle();
  const { input, memoData, handleMemoInput, handleCreateMemo } = useDetail(detailToggle.goal);
  return (
    <MemoBox>
      <InputWrapper>
        <Input
          label="메모"
          type="textarea"
          name="memo"
          value={input.memoInput.memo}
          placeholder="할일을 입력해 주세요."
          onChange={handleMemoInput}
        />
        <button onClick={handleCreateMemo}>+</button>
      </InputWrapper>
      <ul>
        {memoData?.map(el => (
          <MemoItem key={el.id} memo={el} />
        ))}
      </ul>
    </MemoBox>
  );
};

export default GoalMemo;

const MemoBox = styled.section`
  display: flex;
  flex-direction: column;
  height: 400px;
`;

const InputWrapper = styled.div`
  display: flex;
`;
