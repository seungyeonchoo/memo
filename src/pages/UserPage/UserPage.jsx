import styled from 'styled-components';
import UserGoal from './components/UserGoal/UserGoal';
import UserProfile from './components/UserProfile/UserProfile';
import GoalDetail from './components/GoalDetail/GoalDetail';
import useDetail from '../../hooks/useDetail';
import useToggle from '../../hooks/useToggle';

const UserPage = () => {
  const { detailToggle } = useToggle();
  return (
    <UserContainer>
      {/* <UserProfile /> */}
      <UserGoal />
      {detailToggle._toggle && <GoalDetail />}
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.section`
  display: flex;
`;
