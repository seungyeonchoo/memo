import styled from 'styled-components';
import UserProfile from './UserProfile/UserProfile';
import useToggle from '../../hooks/useToggle';
import Goal from '../../components/Goal/Goal';
import useFetch from '../../hooks/useFetch';
import Detail from '../../components/Detail/Detail';
import { user_id } from '../../utils/Storage';

const UserPage = () => {
  const { data: user } = useFetch('users', user_id);
  const { detailToggle } = useToggle();
  return (
    <UserContainer>
      <UserProfile />
      <Goal user={user} />
      {detailToggle._toggle && <Detail />}
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
