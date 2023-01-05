import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import usePatch from '../../../../hooks/usePatch';
import useToggle from '../../../../hooks/useToggle';
import { Button } from '../../../Common/Button';

const InputButton = ({ handleCreate, handleUpdates }) => {
  //   const { handleCreate } = useCreate('goals');
  //   const { handleUpdates } = usePatch('goals');

  const { handleToggle: handleCreateGoalToggle, createGoalToggle } = useToggle('goals');
  const { handleToggle: handleEditToggle } = useToggle('edit');
  const clickSave = createGoalToggle ? handleCreate : handleUpdates;
  const clickCancel = createGoalToggle ? handleCreateGoalToggle : handleEditToggle;

  // validation prop으로 전달하기

  return (
    <ButtonWrapper>
      <Button size="medium" text="저장" onClick={clickSave} />
      <Button size="medium" text="취소" onClick={clickCancel} />
    </ButtonWrapper>
  );
};

export default InputButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
