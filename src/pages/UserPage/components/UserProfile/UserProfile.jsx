import styled from 'styled-components';
import useUser from '../../../../hooks/useUser';
import { UserStorage } from '../../../../utils/Storage';
import BasicInfo from './components/BasicInfo';
import ImminentGoals from './components/ImminentGoals';
import ProfileImg from './components/ProfileImg';

const UserProfile = () => {
  const user_id = new UserStorage().getId();
  const { userData } = useUser(user_id);

  return (
    <Container>
      <Box>
        <ProfileImg data={userData} />
        <BasicInfo data={userData} />
        <button>로그아웃</button>
      </Box>
      <ImminentGoals user={userData} />
    </Container>
  );
};

export default UserProfile;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 2em;
`;

const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #e0e0e0;
  background-color: #eeeeee;
  padding: 1.5rem;
`;
