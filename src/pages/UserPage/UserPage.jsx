import styled from 'styled-components';
import UserProfile from './UserProfile/UserProfile';
import Goal from '../../components/Goal/Goal';
import useFetch from '../../hooks/useFetch';
import Detail from '../../components/Detail/Detail';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserPage = () => {
  const { id } = useParams();
  const { toggle, param } = useSelector(state => state);
  const { sideToggle, detailToggle } = toggle;
  const { data: user } = useFetch(`users/${id}`, param.userParams, ['users', { id: id }]);

  return (
    <UserContainer>
      {sideToggle && <UserProfile />}
      {detailToggle ? <Detail /> : <Goal user={user} />}
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
  min-height: 70vh;
  margin: 3em 0;
`;
