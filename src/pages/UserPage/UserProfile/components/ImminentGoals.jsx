import styled from 'styled-components';
import calcDiffDay, { calcDifferent } from '../../../../utils/calcDiffDay';
import ImminentItem from './ImminentItem';
import ImminentTitle from './ImminentTitle';

const ImminentGoals = ({ user }) => {
  return (
    <Box>
      <ImminentTitle />
      {user?.goals
        .filter(el => calcDifferent(el.due_date) < 3 && el.is_complete === false)
        .sort((a, b) => calcDifferent(a.due_date) - calcDifferent(b.due_date))
        .map(el => (
          <ImminentItem key={el.id} goal={el} />
        ))}
    </Box>
  );
};

export default ImminentGoals;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5em;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  height: 40vh;
  background-color: #fff;
`;
