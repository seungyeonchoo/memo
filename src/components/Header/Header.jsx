import styled from 'styled-components';
import NavBar from './components/NavBar';
import { ImMenu } from 'react-icons/im';
import useToggle from '../../hooks/useToggle';

const Header = () => {
  const { handleToggle } = useToggle('side');
  return (
    <HeaderContainer>
      <div onClick={handleToggle}>
        <ImMenu />
      </div>
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  min-width: 100vw;
  padding: 0 1.5em;
  background-color: #e0e0e0;
`;
