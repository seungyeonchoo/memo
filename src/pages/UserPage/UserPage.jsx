import styled from 'styled-components';
import UserGoal from './components/UserGoal/UserGoal';
import UserProfile from './components/UserProfile/UserProfile';
import UserRecord from './components/UserRecord/UserRecord';

const UserPage = () => {
  return (
    <UserContainer>
      <UserProfile />
      <UserGoal />
      {/* <UserRecord /> */}
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.section`
  display: flex;
`;
