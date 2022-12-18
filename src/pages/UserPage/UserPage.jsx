import styled from 'styled-components';
import UserGoal from './components/UserGoal/UserGoal';
import UserProfile from './components/UserProfile/UserProfile';
import GoalDetail from './components/GoalDetail/GoalDetail';
import useDetail from '../../hooks/useDetail';

const UserPage = () => {
  const { _toggle } = useDetail();
  return (
    <UserContainer>
      {/* <UserProfile /> */}
      <UserGoal />
      {_toggle && <GoalDetail />}
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.section`
  display: flex;
`;
