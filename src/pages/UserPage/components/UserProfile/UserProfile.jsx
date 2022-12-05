import styled from 'styled-components';
import useUser from '../../../../hooks/useUser';
import { UserStorage } from '../../../../utils/Storage';
import BasicInfo from './components/BasicInfo';
import ProfileImg from './components/ProfileImg';

const UserProfile = () => {
  const user_id = new UserStorage().getId();
  const { userData } = useUser(user_id);
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
