import styled from 'styled-components';
import DateUtils from '../../../../utils/DateUtils';
import CalendarBody from './CalendarBody';
import CalendarHead from './CalendarHead';

const CalendarTable = ({ year, month }) => {
  const { result, weeks } = DateUtils.getDates(year, month);
  const calendar = DateUtils.generateCalendar(result, weeks);

  console.log(DateUtils.convert(new Date()));
  return (
    <Table>
      <CalendarHead />
      <CalendarBody data={calendar} year={year} month={month} />
    </Table>
  );
};

export default CalendarTable;

const Table = styled.table`
  width: 300px;
  display: flex;
  flex-direction: column;
`;
