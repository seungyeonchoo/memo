import styled from 'styled-components';
import { Button } from '../../../components/Common/Button';
import useAuth from '../../../hooks/useAuth';
import useFetch from '../../../hooks/useFetch';
import { user_id } from '../../../utils/Storage';
import BasicInfo from './components/BasicInfo';
import ImminentGoals from './components/ImminentGoals';
import ProfileButton from './components/ProfileButton';
import ProfileImg from './components/ProfileImg';

const UserProfile = () => {
  const { handleLogOut } = useAuth();
  const { data: user } = useFetch('users', user_id);
  return (
    <Container>
      <Box>
        <ProfileWrapper>
          <ProfileImg user={user} />
          <BasicInfo user={user} />
          <Button text="로그아웃" onClick={handleLogOut} />
        </ProfileWrapper>
        {/* <ProfileButton /> */}
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
  padding: 0 2rem;
`;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #e0e0e0;
  /* background-color: #eeeeee; */
  border-radius: 5px;
  padding: 1.5rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
