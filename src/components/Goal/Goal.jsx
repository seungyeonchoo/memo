import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import useParam from '../../hooks/useParam';
import useToggle from '../../hooks/useToggle';
import { goalInputChange } from '../../store/slices/inputSlice';
import { createToggleChange } from '../../store/slices/toggleSlice';
import InputUtils from '../../utils/InputUtils';
import { Button } from '../Common/Button';
import GoalInput from './GoalInput/GoalInput';
import GoalList from './GoalList/GoalList';

const Goal = ({ data }) => {
  const { checkUserId } = useParam();
  const { createToggle, editToggle } = useSelector(state => state.toggle);
  const { setGlobalInput } = useInput(InputUtils.initialGoal, goalInputChange);
  const { handleGlobalToggle } = useToggle(createToggleChange, setGlobalInput);

  return (
    <Container>
      {createToggle || editToggle ? (
        <GoalInput />
      ) : (
        <>
          <TitleText>{data?.name}님의 목표</TitleText>
          {checkUserId && <Button size="large" text="목표추가" onClick={handleGlobalToggle} />}
          <GoalList user={data} />
        </>
      )}
    </Container>
  );
};
export default Goal;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 0.5em 0;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 500px;
  margin: 0 4rem;
  /* border-bottom: ${props => (!props.border ? '1px solid #666' : 'none')}; */
`;
