import styled from 'styled-components';

const NavBar = () => {
  return (
    <NavContainer>
      <NavBtn>Home</NavBtn>
      <NavBtn>Personal</NavBtn>
      <NavBtn>Group</NavBtn>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
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
