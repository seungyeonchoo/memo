import styled from 'styled-components';
import DateUtils from '../../../../utils/DateUtils';
import CalendarHead, { TableRow } from './CalendarHead';

const Table = ({ year, month }) => {
  const { result, weeks } = DateUtils.getDates(year, month);
  const calender = DateUtils.generateCalendar(result, weeks);
  //   console.log(result);

  return (
    <Box>
      <CalendarHead />
      <tbody week={weeks}>
        {calender.map((el, i) => (
          <Row key={i}>
            {el.map((el, i) => (
              <Date key={i}>{el}</Date>
            ))}
          </Row>
        ))}
      </tbody>
    </Box>
  );
};

export default Table;

const Box = styled.table`
  width: 300px;
  display: flex;
  flex-direction: column;
`;
const Row = styled.tr`
  display: flex;
  width: 100%;
`;

const Date = styled.th`
  width: calc(100% / 7);
`;
/* height: ${props => calc(100%/props.week)}; */
