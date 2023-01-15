import { useState } from 'react';
import styled from 'styled-components';
import CalendarTitle from './components/CalendarTitle';
import CalendarTable from './components/CalendarTable';

const Calendar = () => {
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth() + 1;
  const [year, setYear] = useState(thisYear);
  const [month, setMonth] = useState(thisMonth);
  return (
    <Container>
      <CalendarTitle year={year} month={month} handleMonth={{ setYear, setMonth }} />
      <CalendarTable year={year} month={month} />
    </Container>
  );
};

export default Calendar;

const Container = styled.section``;
