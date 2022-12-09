import styled from 'styled-components';

const GoalFilters = () => {
  return (
    <Box>
      <div>
        <span>등록일순</span>
        <span>마감일순</span>
      </div>
      <div>
        <span>공개여부</span>
        <span>완료여부</span>
      </div>
    </Box>
  );
};

export default GoalFilters;

const Box = styled.section`
  display: flex;
  justify-content: space-between;
`;
