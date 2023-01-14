import { useState } from 'react';
import styled from 'styled-components';
import DateUtils from '../../../../utils/DateUtils';

const CalendarTitle = ({ year, month, handleMonth }) => {
  const handleToPrev = () => {
    if (month === 1) {
      handleMonth.setYear(year - 1);
      handleMonth.setMonth(12);
    } else {
      handleMonth.setMonth(month - 1);
    }
  };

  const handleToNext = () => {
    if (month === 12) {
      handleMonth.setYear(year + 1);
      handleMonth.setMonth(1);
    } else {
      handleMonth.setMonth(month + 1);
    }
  };

  return (
    <Title>
      <span onClick={handleToPrev}>prev</span>
      <div>{`${year}.${month < 10 ? `0${month}` : month}`}</div>
      <span onClick={handleToNext}>next</span>
    </Title>
  );
};

export default CalendarTitle;

const Title = styled.div`
  display: flex;
`;
