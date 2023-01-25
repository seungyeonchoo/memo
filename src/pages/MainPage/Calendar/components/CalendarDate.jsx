import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../../../../hooks/useInput';
import { dateInfoUpdate } from '../../../../store/slices/inputSlice';
import DateUtils from '../../../../utils/DateUtils';
import DateStatus from './DateStatus';

const CalendarDate = ({ date, name, idx, month, week, setToggle }) => {
  const { dateInfo } = useSelector(state => state.input);
  const isToday = name === DateUtils.convert(new Date());
  const isThisMonth = new Date(name).getMonth() + 1 !== month;
  const isSelected = name === dateInfo.date;

  const color = isThisMonth ? 'grey' : idx === 0 || idx === 6 ? '#d32f2f' : 'black';
  const highlight = isToday ? '#ffcdd2' : isSelected ? '#bbdefb' : 'none';
  const { setGlobalInput } = useInput({ date: name, week: week }, dateInfoUpdate, setToggle);

  return (
    <TableDate name={name} color={color} onClick={setGlobalInput} highlight={highlight}>
      <div>{date}</div>
      <DateStatus name={name} week={week} />
    </TableDate>
  );
};

export default CalendarDate;

const TableDate = styled.th`
  width: calc(100% / 7);
  margin: 0 0.4rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: ${props => props.color};
  border-radius: 10px;
  background-color: ${props => props.highlight};

  &:hover {
    box-shadow: 1px 1px 1px #666;
  }
`;
