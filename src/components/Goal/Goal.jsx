import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import useMutate from '../../hooks/useMutate';
import useParam from '../../hooks/useParam';
import useToggle from '../../hooks/useToggle';
import useToggle2 from '../../hooks/useToggle2';
import InputUtils from '../../utils/InputUtils';
import { Button } from '../Common/Button';
import Container from '../Common/Container';
import GoalInput from './GoalInput/GoalInput';
import GoalList from './GoalList/GoalList';

const Goal = ({ user }) => {
  const { checkUserId } = useParam();
  const [createToggle, handleCreateToggle] = useToggle2();
  const [editToggle, handleEditToggle] = useToggle2();
  const { inputValue, handleInput } = useInput(InputUtils.initialGoal);
  const { handleMutation: create } = useMutate('goals', 'post', inputValue, handleCreateToggle);
  const { handleMutation: update } = useMutate('goals', 'patch', inputValue, handleEditToggle);

  return (
    <Container>
      {createToggle || editToggle ? (
        <GoalInput
          toggle={createToggle}
          handleToggle={{ handleCreateToggle, handleEditToggle }}
          handleInputChange={{ inputValue, handleInput }}
          handleMutation={{ create, update }}
        />
      ) : (
        <>
          <TitleText>{user?.name}님의 목표</TitleText>
          {checkUserId && <Button size="large" text="목표추가" onClick={handleCreateToggle} />}
          <GoalList toggle={{ createToggle, editToggle }} handleToggle={handleEditToggle} />
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
