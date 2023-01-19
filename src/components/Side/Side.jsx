import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';
import { user_id } from '../../utils/Storage';
import { Button } from '../Common/Button';
import BasicInfo from './components/BasicInfo';
import ProfileButton from './components/ProfileButton';

const Side = () => {
  const { handleLogOut } = useAuth();
  const { userParams } = useSelector(state => state.param);
  const { data: user } = useFetch(`users/${user_id}`, userParams, ['users', { id: user_id }]);
  return (
    <Container z_index={1}>
      <Box>
        <ProfileWrapper>
          <BasicInfo user={user} />
          <Button text="로그아웃" onClick={handleLogOut} />
        </ProfileWrapper>
      </Box>
      <ProfileButton />
    </Container>
  );
};

export default Side;
const Container = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  z-index: 1;
  flex-direction: column;
  height: 30vh;
  padding: 4rem;
  /* background-color: #e0e0e0; */
  background-color: #8e8e8e;
`;

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
