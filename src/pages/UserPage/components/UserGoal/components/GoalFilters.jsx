import styled from 'styled-components';
import { AiOutlineSortAscending } from 'react-icons/ai';
import { AiFillFilter } from 'react-icons/ai';

const GoalFilters = () => {
  return (
    <Box>
      <div>
        <AiOutlineSortAscending />
      </div>
      <div>
        <AiFillFilter />
      </div>
    </Box>
  );
};

export default GoalFilters;

const Box = styled.section`
  width: 100%;
  display: flex;
  justify-content: end;
  margin: 0.5em 0;
`;
