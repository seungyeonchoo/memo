import { AiOutlineSortAscending } from 'react-icons/ai';
import { AiFillFilter } from 'react-icons/ai';
import styled from 'styled-components';
import useToggle from '../../../hooks/useToggle';
import FilterItem from './components/FilterItem';
import SortItem from './components/SortItem';

const GoalFilter = () => {
  const { handleToggle: handleSortToggle, sortToggle } = useToggle('sort');
  const { handleToggle: handleFilterToggle, filterToggle } = useToggle('filter');

  return (
    <Box>
      <IconWrapper>
        <IconButton onClick={handleSortToggle}>
          <AiOutlineSortAscending />
        </IconButton>
        <IconButton onClick={handleFilterToggle}>
          <AiFillFilter />
        </IconButton>
      </IconWrapper>
      {sortToggle && <SortItem />}
      {filterToggle && <FilterItem />}
    </Box>
  );
};

export default GoalFilter;

const Box = styled.section`
  width: 410px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0.5em 0;
  padding: 0 0.8em;
`;

const IconWrapper = styled.div``;
const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
