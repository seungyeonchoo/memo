import styled from 'styled-components';
import NavBar from './components/NavBar';
import { ImMenu } from 'react-icons/im';

const Header = () => {
  return (
    <HeaderContainer>
      <ImMenu />
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
