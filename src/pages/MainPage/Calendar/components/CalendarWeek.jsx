import styled from 'styled-components';
import DateUtils from '../../../../utils/DateUtils';
import CalendarDate from './CalendarDate';

const CalendarWeek = ({ data, year, month, idx, weeks }) => {
  const thisWeek = `${year}-${month < 10 ? `0${month}` : month} week${idx + 1}`;

  return (
    <Row key={idx} name={thisWeek}>
      {data.map((date, i) => {
        const dateName = DateUtils.generateDateName(idx, i, year, month, date, weeks.length - 1);
        return (
          <CalendarDate key={i} date={date} idx={i} name={dateName} month={month} week={thisWeek} />
        );
      })}
    </Row>
  );
};

export default CalendarWeek;

const Row = styled.tr`
  display: flex;
  width: 100%;
`;
