import styled from 'styled-components';
import BasicInfo from './components/BasicInfo';
import ProfileImg from './components/ProfileImg';

const Profile = ({ data }) => {
  return (
    <Box>
      <ProfileImg data={data} />
      <BasicInfo data={data} />
    </Box>
  );
};

export default Profile;

const Box = styled.section`
  display: flex;
  justify-content: space-around;
  width: 300px;
  background-color: #cfcfcf;
  padding: 1.5rem;
`;
