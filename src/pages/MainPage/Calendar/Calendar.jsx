import { useState } from 'react';
import styled from 'styled-components';
import CalendarTitle from './components/CalendarTitle';
import Table from './components/Table';

const Calendar = () => {
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth() + 1;
  const [year, setYear] = useState(thisYear);
  const [month, setMonth] = useState(thisMonth);
  return (
    <Container>
      <CalendarTitle year={year} month={month} handleMonth={{ setYear, setMonth }} />
      <Table year={year} month={month} />
    </Container>
  );
};

export default Calendar;

const Container = styled.section``;
