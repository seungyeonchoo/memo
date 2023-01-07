import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useMutate from '../../../../hooks/useMutate';
import useToggle from '../../../../hooks/useToggle';
import { createToggleChange, editToggleChange } from '../../../../store/slices/toggleSlice';
import { Button } from '../../../Common/Button';

const InputButton = () => {
  const { input, toggle } = useSelector(state => state);
  const url = toggle.createToggle ? 'goals' : `goals/${input.goalInput.id}`;
  const method = toggle.createToggle ? 'post' : 'patch';
  const toggleChange = toggle.createToggle ? createToggleChange : editToggleChange;
  const { handleGlobalToggle } = useToggle(toggleChange);
  const { handleMutation } = useMutate(url, method, input.goalInput, handleGlobalToggle);

  return (
    <ButtonWrapper>
      <Button size="medium" text="저장" onClick={handleMutation} />
      <Button size="medium" text="취소" onClick={handleGlobalToggle} />
    </ButtonWrapper>
  );
};

// stop
export default InputButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
