import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useToggle from '../../../../hooks/useToggle';
import { Button } from '../../../Common/Button';

const InputButton = ({ handleClick, handleCancel }) => {
  // validation prop으로 전달하기

  return (
    <ButtonWrapper>
      <Button size="medium" text="저장" onClick={handleClick} />
      <Button size="medium" text="취소" onClick={handleCancel} />
    </ButtonWrapper>
  );
};

export default InputButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
