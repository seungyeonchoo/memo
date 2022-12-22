import { AiOutlineSortAscending } from 'react-icons/ai';
import { AiFillFilter } from 'react-icons/ai';
import styled from 'styled-components';
import useToggle from '../../../../../hooks/useToggle';

const FilterIcon = () => {
  const { handleToggle: handleSortToggle } = useToggle('sort');
  const { handleToggle: handleFilterToggle } = useToggle('filter');

  return (
    <IconWrapper>
      <IconButton onClick={handleSortToggle}>
        <AiOutlineSortAscending />
      </IconButton>
      <IconButton onClick={handleFilterToggle}>
        <AiFillFilter />
      </IconButton>
    </IconWrapper>
  );
};

export default FilterIcon;

const IconWrapper = styled.div``;
const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
