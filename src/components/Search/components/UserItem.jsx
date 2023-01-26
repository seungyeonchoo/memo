import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UserItem = ({ user }) => {
  const nav = useNavigate();
  return (
    <Item onClick={() => nav(`/users/${user.id}`)}>
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
    </Item>
  );
};

export default UserItem;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 0.5em;
  padding: 1em;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

const Name = styled.span``;
const Email = styled.span`
  font-size: 0.8em;
`;
