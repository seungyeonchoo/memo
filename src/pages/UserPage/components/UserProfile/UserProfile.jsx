import styled from 'styled-components';
import useUser from '../../../../hooks/useUser';
import BasicInfo from './components/BasicInfo';
import ProfileImg from './components/ProfileImg';

const UserProfile = () => {
  const { data } = useUser('profile', '1');
  return (
    <ProfileBox>
      <Box>
        <ProfileImg data={data} />
        <BasicInfo data={data} />
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
