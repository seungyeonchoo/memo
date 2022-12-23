import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import { user_id } from '../../../utils/Storage';
import BasicInfo from './components/BasicInfo';
import ImminentGoals from './components/ImminentGoals';
import ProfileButton from './components/ProfileButton';
import ProfileImg from './components/ProfileImg';

const UserProfile = () => {
  const { data: user } = useFetch('users', user_id);

  return (
    <Container>
      <Box>
        <ProfileWrapper>
          <ProfileImg user={user} />
          <BasicInfo user={user} />
          <button>로그아웃</button>
        </ProfileWrapper>
        <ProfileButton />
      </Box>
      <ImminentGoals user={user} />
    </Container>
  );
};

export default UserProfile;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #e0e0e0;
  background-color: #eeeeee;
  padding: 1.5rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
