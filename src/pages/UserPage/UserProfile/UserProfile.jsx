import styled from 'styled-components';
import Approaching from '../../../components/Approaching/Approaching';
import { Button } from '../../../components/Common/Button';
import Container from '../../../components/Common/Container';
import useAuth from '../../../hooks/useAuth';
import useFetch from '../../../hooks/useFetch';
import { user_id } from '../../../utils/Storage';
import BasicInfo from './components/BasicInfo';
import ProfileButton from './components/ProfileButton';
import ProfileImg from './components/ProfileImg';

const UserProfile = () => {
  const { handleLogOut } = useAuth();
  const { data: user } = useFetch('users', user_id);
  return (
    <Container z_index={1}>
      <Box>
        <ProfileWrapper>
          <ProfileImg user={user} />
          <BasicInfo user={user} />
          <Button text="로그아웃" onClick={handleLogOut} />
        </ProfileWrapper>
        {/* <ProfileButton /> */}
      </Box>
      <Approaching user={user} />
    </Container>
  );
};

export default UserProfile;
// const Container = styled.div`
//   display: flex;
//   position: absolute;
//   z-index: 1;
//   flex-direction: column;
//   height: 70vh;
//   padding: 4rem;
//   /* background-color: #e0e0e0; */
//   background-color: #8e8e8e;
// `;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  border-radius: 5px;
  padding: 1.5rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
