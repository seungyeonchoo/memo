import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import useParam from '../../hooks/useParam';
import useToggle from '../../hooks/useToggle';
import { goalInputChange } from '../../store/slices/inputSlice';
import { createToggleChange } from '../../store/slices/toggleSlice';
import InputUtils from '../../utils/InputUtils';
import { user_id } from '../../utils/Storage';
import { Button } from '../Common/Button';
import Container from '../Common/Container';
import GoalInput from './GoalInput/GoalInput';
import GoalList from './GoalList/GoalList';

const Goal = ({ data, type }) => {
  const { checkUserId } = useParam();
  const { createToggle, editToggle } = useSelector(state => state.toggle);
  const { setGlobalInput } = useInput(InputUtils.initialGoal, goalInputChange);
  const { handleGlobalToggle } = useToggle(createToggleChange, setGlobalInput);

  const check = type === 'users' ? checkUserId : data?.admin;

  return (
    <Container>
      {createToggle || editToggle ? (
        <GoalInput type={type} />
      ) : (
        <>
          <TitleText>{data?.name}님의 목표</TitleText>
          {check && <Button size="large" text="목표추가" onClick={handleGlobalToggle} />}
          <GoalList user={data} type={type} />
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
