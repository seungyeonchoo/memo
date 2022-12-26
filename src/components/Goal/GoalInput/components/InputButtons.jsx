import styled from 'styled-components';
import useCreate from '../../../../hooks/useCreate';
import useInput from '../../../../hooks/useInput';
import usePatch from '../../../../hooks/usePatch';
import useToggle from '../../../../hooks/useToggle';
import { Button } from '../../../Common/Button';

const InputButton = () => {
  const { handleCreate } = useCreate('goals');
  const { isValid } = useInput('goals');
  const { handleUpdates } = usePatch('goals');
  const { handleToggle: handleCreateGoalToggle, createGoalToggle } = useToggle('goals');
  const { handleToggle: handleEditToggle } = useToggle('edit');

  const clickSave = createGoalToggle ? handleCreate : handleUpdates;
  const clickCancel = createGoalToggle ? handleCreateGoalToggle : handleEditToggle;

  return (
    <ButtonWrapper>
      <Button size="medium" text="저장" onClick={clickSave} disabled={!isValid} />
      <Button size="medium" text="취소" onClick={clickCancel} />
    </ButtonWrapper>
  );
};

export default InputButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
