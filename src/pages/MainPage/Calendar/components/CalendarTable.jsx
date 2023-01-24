import styled from 'styled-components';
import DateUtils from '../../../../utils/DateUtils';
import CalendarBody from './CalendarBody';
import CalendarHead from './CalendarHead';

const CalendarTable = ({ year, month }) => {
  const { result, weeks } = DateUtils.getDates(year, month);

  return (
    <TableBox>
      <Table>
        <CalendarHead />
        <CalendarBody data={DateUtils.generateCalendar(result, weeks)} year={year} month={month} />
      </Table>
    </TableBox>
  );
};

export default CalendarTable;

const TableBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
