import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import { detailToggleChange } from '../../store/slices/toggleSlice';
import DateUtils from '../../utils/DateUtils';
import GoalInfo from './components/GoaInfo';
import GoalFulfill from './components/GoalFulfill';

const Detail = ({ goal }) => {
  const { handleGlobalToggle } = useToggle(detailToggleChange);
  const dateList = DateUtils.getDateList(goal?.date, goal?.due_date, goal?.repeat);

  return (
    <DetailContainer>
      <TitleText>{goal?.goal_name}</TitleText>
      <Repeat>{goal?.repeat}</Repeat>
      <GoalInfo goal={goal} />
      <GoalFulfill list={dateList} goal={goal} />
      <button onClick={handleGlobalToggle}>뒤로</button>
    </DetailContainer>
  );
};

export default Detail;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  /* margin: 0.5em 0; */
`;

const DetailContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 500px;
  margin: 0 4rem;
  background-color: #fff;
  z-index: 1;
`;

const Repeat = styled.span`
  position: absolute;
  top: 25px;
  right: 100px;
  font-size: 0.8em;
  font-weight: bold;
  color: red;
`;
