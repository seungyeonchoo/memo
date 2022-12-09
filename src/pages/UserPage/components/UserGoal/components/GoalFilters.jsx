import styled from 'styled-components';

const GoalFilters = () => {
  return (
    <Box>
      <div>
        정렬
        <span>등록일</span>
        <span>마감일</span>
      </div>
      <div>
        필터
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
