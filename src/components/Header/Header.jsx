import styled from 'styled-components';
import NavBar from './components/NavBar';
import { ImMenu } from 'react-icons/im';

import Search from '../Search/Search';
import useToggle from '../../hooks/useToggle';
import Side from '../Side/Side';
import SearchBar from './components/SearchBar';

const Header = () => {
  const { toggle: searchToggle, handleToggle: handleSearchToggle } = useToggle();
  const { toggle: sideToggle, handleToggle: handleSideToggle } = useToggle();
  return (
    <>
      <HeaderContainer>
        <Menu onClick={handleSideToggle}>
          <ImMenu />
        </Menu>
        {searchToggle ? (
          <SearchBar handleToggle={handleSearchToggle} />
        ) : (
          <NavBar toggle={searchToggle} handleToggle={handleSearchToggle} />
        )}
      </HeaderContainer>
      {sideToggle && <Side />}
    </>
  );
};

export default Header;

const Menu = styled.div`
  position: absolute;
  left: 2rem;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  min-width: 100vw;
  padding: 0 1.5em;
  width: 100%;
  /* background-color: #e0e0e0; */
`;
