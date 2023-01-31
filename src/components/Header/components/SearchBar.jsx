import styled from 'styled-components';
import Search from '../../Search/Search';
import { BsArrowReturnLeft } from 'react-icons/bs';

const SearchBar = ({ handleToggle }) => {
  return (
    <>
      <Search />
      <ReturnButton onClick={handleToggle}>
        <BsArrowReturnLeft />
      </ReturnButton>
    </>
  );
};

export default SearchBar;

const ReturnButton = styled.span`
  margin: -2em;
  z-index: 1;
`;
