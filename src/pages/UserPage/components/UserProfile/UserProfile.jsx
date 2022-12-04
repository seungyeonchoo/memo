import styled from 'styled-components';
import useAuth from '../../../../hooks/useAuth';
import useUser from '../../../../hooks/useUser';
import BasicInfo from './components/BasicInfo';
import ProfileImg from './components/ProfileImg';

const UserProfile = () => {
  const { authData } = useAuth();
  const { userData } = useUser(authData?.user.id);
  return (
    <ProfileBox>
      <Box>
        <ProfileImg data={userData} />
        <BasicInfo data={userData} />
      </Box>
    </ProfileBox>
  );
};

export default UserProfile;

const ProfileBox = styled.section``;

const Box = styled.section`
  display: flex;
  justify-content: space-around;
  width: 300px;
  background-color: #cfcfcf;
  padding: 1.5rem;
`;
