import styled from 'styled-components';

const CalendarHead = () => {
  const DAYS = ['SUN', 'SAT', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
  return (
    <thead>
      <Row>
        {DAYS.map(el => (
          <Day key={el}>{el}</Day>
        ))}
      </Row>
    </thead>
  );
};

export default CalendarHead;

const Day = styled.th`
  width: calc(100% / 7);
`;

const Row = styled.tr`
  width: 100%;
  display: flex;
`;
