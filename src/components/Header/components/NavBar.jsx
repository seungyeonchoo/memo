import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useToggle from '../../../hooks/useToggle';
import { user_id } from '../../../utils/Storage';
import Search from '../../Search/Search';

const NavBar = ({ toggle, handleToggle }) => {
  const nav = useNavigate();

  return (
    <NavContainer>
      <NavBtn onClick={() => nav(`/main`)}>Main</NavBtn>
      <NavBtn onClick={() => nav(`/users/${user_id}`)}>Goals</NavBtn>
      <NavBtn onClick={handleToggle}>검색</NavBtn>
      {/* <NavBtn onClick={() => nav(`/groups`)}>Group</NavBtn> */}
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
