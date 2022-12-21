import styled from 'styled-components';
import Button from '../../../../../components/Common/Button';
import Input from '../../../../../components/Common/Input';
import useCreate from '../../../../../hooks/useCreate';
import useInput from '../../../../../hooks/useInput';
import usePatch from '../../../../../hooks/usePatch';
import useToggle from '../../../../../hooks/useToggle';

const GoalInput = () => {
  const { handleCreate } = useCreate('goals');
  const { handleUpdates } = usePatch('goals');
  const { handleInput, goalInput, isValid } = useInput('goals');
  const { handleToggle: handleCreateGoalToggle, createGoalToggle } = useToggle('goals');
  const { handleToggle: handleEditToggle } = useToggle('edit');
  const clickSave = createGoalToggle ? handleCreate : handleUpdates;
  const clickCancel = createGoalToggle ? handleCreateGoalToggle : handleEditToggle;

  return (
    <InputBox>
      <Input
        label="마감기한"
        type="date"
        value={goalInput.due_date}
        name="due_date"
        onChange={handleInput}
      />
      <Input
        label="목표명"
        type="text"
        value={goalInput.goal_name}
        name="goal_name"
        onChange={handleInput}
      />
      <Input
        label="상세목표"
        type="textarea"
        value={goalInput.description}
        name="description"
        onChange={handleInput}
      />
      <ButtonWrapper>
        <Button size="md" text="저장" onClick={clickSave} disabled={!isValid} />
        <Button size="md" text="취소" onClick={clickCancel} />
      </ButtonWrapper>
    </InputBox>
  );
};

export default GoalInput;

const InputBox = styled.div``;
const ButtonWrapper = styled.div``;
