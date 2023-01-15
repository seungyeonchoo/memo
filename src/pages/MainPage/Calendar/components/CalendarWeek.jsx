import styled from 'styled-components';
import DateUtils from '../../../../utils/DateUtils';
import CalendarDate from './CalendarDate';

const CalendarWeek = ({ data, year, month, idx, weeks }) => {
  const weekName = `${year}.${month} week${idx + 1}`;

  return (
    <Row key={idx} name={weekName}>
      {data.map((date, i) => {
        const dateName = DateUtils.generateDateName(idx, i, year, month, date, weeks.length - 1);
        return (
          <CalendarDate
            key={i}
            date={date}
            index={i}
            name={dateName}
            month={month}
            week={weekName}
          />
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

const Date = styled.th`
  width: calc(100% / 7);
`;
