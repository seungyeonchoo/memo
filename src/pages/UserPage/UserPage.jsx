import styled from 'styled-components';
import UserProfile from './UserProfile/UserProfile';
import useToggle from '../../hooks/useToggle';
import Goal from '../../components/Goal/Goal';
import useFetch from '../../hooks/useFetch';
import Detail from '../../components/Detail/Detail';
import { user_id } from '../../utils/Storage';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useFetch('users', id);
  const { detailToggle } = useToggle();

  if (isLoading) return <div>loading...</div>;
  return (
    <UserContainer>
      {/* <UserProfile user={user} /> */}
      <Goal user={user} />
      {detailToggle._toggle && <Detail />}
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
  min-height: 68vh;
  margin: 3em 0;
`;
