import styled from 'styled-components';
import UserProfile from './components/UserProfile';

const UserPage = () => {
  return (
    <UserContainer>
      <UserProfile />
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.section``;
