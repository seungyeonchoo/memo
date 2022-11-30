import styled from 'styled-components';
import UserGoal from './components/UserGoal/UserGoal';
import UserProfile from './components/UserProfile/UserProfile';

const UserPage = () => {
  return (
    <UserContainer>
      <UserProfile />
      <UserGoal />
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.section`
  display: flex;
`;
