import { useEffect } from 'react';
import styled from 'styled-components';
import useInput from '../../../../hooks/useInput';
import { dateInfoUpdate } from '../../../../store/slices/inputSlice';
import DateUtils from '../../../../utils/DateUtils';

const CalendarDate = ({ date, name, index, month, week }) => {
  const dateMonth = new Date(name).getMonth() + 1;
  const dateColour = dateMonth !== month ? 'grey' : index === 0 || index === 6 ? 'red' : 'black';
  const dateInfo = { date: name, week: week };
  const { setGlobalInput } = useInput(dateInfo, dateInfoUpdate);
  const today = name === DateUtils.convert(new Date());

  useEffect(() => {
    if (today) setGlobalInput();
  }, []);

  return (
    <TableDate name={name} color={dateColour} onClick={setGlobalInput}>
      {today ? '*' + date : date}
    </TableDate>
  );
};

export default CalendarDate;

const TableDate = styled.th`
  width: calc(100% / 7);
  color: ${props => props.color};
`;
