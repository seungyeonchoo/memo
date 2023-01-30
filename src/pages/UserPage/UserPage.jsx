import styled from 'styled-components';
import Goal from '../../components/Goal/Goal';
import useFetch from '../../hooks/useFetch';
import Detail from '../../components/Detail/Detail';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserPage = () => {
  const { id } = useParams();
  const { toggle, param, input } = useSelector(state => state);
  const { data: user } = useFetch(`users/${id}`, param.userParams, ['users', { id: id }]);
  const { data: goal } = useFetch(`goals/${input.goalInput.id}`, param.goalParams, [
    'goals',
    { id: input.goalInput.id },
  ]);

  return (
    <UserContainer>
      {toggle.detailToggle ? <Detail goal={goal} /> : <Goal data={user} type="users" />}
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
