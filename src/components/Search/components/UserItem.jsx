import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UserItem = ({ user }) => {
  const nav = useNavigate();
  return (
    <Item onClick={() => nav(`/users/${user.id}`)}>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </Item>
  );
};

export default UserItem;

const Item = styled.li`
  display: flex;
`;
