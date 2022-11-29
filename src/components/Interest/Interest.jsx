import styled from 'styled-components';
import InterestItem from './components/InterestItem';

const Interest = ({ interest }) => {
  return (
    <Box>
      {interest?.map((el, i) => (
        <InterestItem key={el + i} interest={el} />
      ))}
    </Box>
  );
};

export default Interest;

const Box = styled.ul`
  display: flex;
`;
