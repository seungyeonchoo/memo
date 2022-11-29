import styled from 'styled-components';
import Profile from '../../../components/Profile/Profile';
import Status from '../../../components/Status/Status';
import useUser from '../../../hooks/useUser';

const UserProfile = () => {
  const { data } = useUser('profile', '1');
  return (
    <ProfileBox>
      <Profile data={data} />
      <Status />
    </ProfileBox>
  );
};

export default UserProfile;

const ProfileBox = styled.section``;
