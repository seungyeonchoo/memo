import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { user_id } from '../../../utils/Storage';

const NavBar = () => {
  const nav = useNavigate();
  return (
    <NavContainer>
      <NavBtn onClick={() => nav(`/main`)}>Home</NavBtn>
      <NavBtn onClick={() => nav(`/users/${user_id}`)}>Personal</NavBtn>
      <NavBtn onClick={() => nav(`/groups`)}>Group</NavBtn>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  height: 100%;
`;
const NavBtn = styled.li`
  list-style: none;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: blue;
  }
  && {
    margin: 0 1em;
  }
`;
