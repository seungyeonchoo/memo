import styled from 'styled-components';
import NavBar from './components/NavBar';
import { ImMenu } from 'react-icons/im';
import Search from '../Search/Search';
import useToggle from '../../hooks/useToggle';
import { sideToggleChange } from '../../store/slices/toggleSlice';
import Side from '../Side/Side';

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
          <>
            <Search />
            <span onClick={handleSearchToggle}>x</span>
          </>
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
  background-color: #e0e0e0;
`;
