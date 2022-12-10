import styled from 'styled-components';
import calcDiffDay from '../../../../../utils/calcDiffDay';
import ImminentItem from './ImminentItem';
import ImminentTitle from './ImminentTitle';

const ImminentGoals = ({ user }) => {
  return (
    <Box>
      <ImminentTitle />
      {user?.goals
        .filter(el => calcDiffDay(el.due_date) < 3 && el.is_complete === false)
        .sort((a, b) => calcDiffDay(a.due_date) - calcDiffDay(b.due_date))
        .map(el => (
          <ImminentItem key={el.id} goal={el} />
        ))}
    </Box>
  );
};

export default ImminentGoals;

const Box = styled.div``;
