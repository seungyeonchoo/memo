import styled from 'styled-components';
import CalendarWeek from './CalendarWeek';

const CalendarBody = ({ data, year, month, setToggle }) => {
  return (
    <TableBody>
      {data.map((week, idx) => (
        <CalendarWeek
          key={idx}
          data={week}
          year={year}
          month={month}
          idx={idx}
          weeks={data}
          setToggle={setToggle}
        />
      ))}
    </TableBody>
  );
};

export default CalendarBody;

const TableBody = styled.tbody`
  width: 100%;
`;
