import styled from 'styled-components';
import useFetch from '../../../../hooks/useFetch';
import BasicInfo from './components/BasicInfo';
import ImminentGoals from './components/ImminentGoals';
import ProfileImg from './components/ProfileImg';

const UserProfile = () => {
  const { data: user } = useFetch('users');

  return (
    <Container>
      <Box>
        <ProfileImg user={user} />
        <BasicInfo user={user} />
        <button>로그아웃</button>
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
  align-items: center;
  justify-content: space-around;
  border: 1px solid #e0e0e0;
  background-color: #eeeeee;
  padding: 1.5rem;
`;
