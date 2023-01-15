import styled from 'styled-components';

const CalendarHead = () => {
  const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return (
    <Head>
      <Row>
        {DAYS.map(el => (
          <Day key={el}>{el}</Day>
        ))}
      </Row>
    </Head>
  );
};

export default CalendarHead;

const Head = styled.thead``;

const Day = styled.th`
  width: calc(100% / 7);
`;

const Row = styled.tr`
  width: 100%;
  display: flex;
`;
