import styled from 'styled-components';
import UserProfile from './UserProfile/UserProfile';
import useToggle from '../../hooks/useToggle';
import Goal from '../../components/Goal/Goal';
import useFetch from '../../hooks/useFetch';
import Detail from '../../components/Detail/Detail';

const UserPage = () => {
  const { data: user } = useFetch('users');
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
`;
