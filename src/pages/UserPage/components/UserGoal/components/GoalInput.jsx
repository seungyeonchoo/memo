import styled from 'styled-components';
import Button from '../../../../../components/Common/Button';
import Input from '../../../../../components/Common/Input';
import useGoal from '../../../../../hooks/useGoal';
import useToggle from '../../../../../hooks/useToggle';

const GoalInput = () => {
  const { goalInput, isValid, handleGoalInput, handleCreateGoal, handleUpdates } = useGoal();
  const { handleCreateGoalToggle, handleEditGoalToggle, createGoalToggle } = useToggle();
  const clickSave = createGoalToggle ? handleCreateGoal : handleUpdates;
  const clickCancel = createGoalToggle ? handleCreateGoalToggle : handleEditGoalToggle;

  return (
    <InputBox>
      <Input
        label="마감기한"
        type="date"
        value={goalInput.due_date}
        name="due_date"
        onChange={handleGoalInput}
      />
      <Input
        label="목표명"
        type="text"
        value={goalInput.goal_name}
        name="goal_name"
        onChange={handleGoalInput}
      />
      <Input
        label="상세목표"
        type="textarea"
        value={goalInput.description}
        name="description"
        onChange={handleGoalInput}
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
