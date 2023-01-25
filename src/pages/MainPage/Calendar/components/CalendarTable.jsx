import styled from 'styled-components';
import DateUtils from '../../../../utils/DateUtils';
import CalendarBody from './CalendarBody';
import CalendarHead from './CalendarHead';

const CalendarTable = ({ year, month, setToggle }) => {
  const { result, weeks } = DateUtils.getDates(year, month);

  return (
    <TableBox>
      <Table>
        <CalendarHead />
        <CalendarBody
          data={DateUtils.generateCalendar(result, weeks)}
          year={year}
          month={month}
          setToggle={setToggle}
        />
      </Table>
    </TableBox>
  );
};

export default CalendarTable;

const TableBox = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #666;
  padding-bottom: 3em;
`;

const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
