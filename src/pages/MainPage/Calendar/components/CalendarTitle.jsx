import { useState } from 'react';
import styled from 'styled-components';
import DateUtils from '../../../../utils/DateUtils';

const CalendarTitle = ({ year, month, handleMonth }) => {
  return (
    <Title>
      <span onClick={() => DateUtils.handleToPrev(year, month, handleMonth)}>prev</span>
      <div>{`${year}-${month < 10 ? `0${month}` : month}`}</div>
      <span onClick={() => DateUtils.handleToNext(year, month, handleMonth)}>next</span>
    </Title>
  );
};

export default CalendarTitle;

const Title = styled.div`
  display: flex;
`;
