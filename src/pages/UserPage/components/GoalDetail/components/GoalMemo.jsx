import styled from 'styled-components';
import Input from '../../../../../components/Common/Input';
import useDetail from '../../../../../hooks/useDetail';
import useToggle from '../../../../../hooks/useToggle';

const GoalMemo = () => {
  const { detailToggle } = useToggle();
  const { input, memoData, handleMemoInput, handleCreateMemo } = useDetail(detailToggle.goal);
  return (
    <MemoBox>
      <div>{memoData?.map(el => el.date)}</div>
      <InputWrapper>
        <Input
          // label="메모"
          type="textarea"
          name="memo"
          value={input.memoInput.memo}
          placeholder="할일을 입력해 주세요."
          onChange={handleMemoInput}
        />
        <button onClick={handleCreateMemo}>+</button>
      </InputWrapper>
    </MemoBox>
  );
};

export default GoalMemo;

const MemoBox = styled.section`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
`;
