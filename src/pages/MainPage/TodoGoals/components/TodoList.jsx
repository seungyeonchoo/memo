import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GoalUtils from '../../../../utils/GoalUtils';
import TodoItem from './TodoItem';

const TodoList = ({ user, repeat }) => {
  const { dateInfo } = useSelector(state => state.input);
  const goals = GoalUtils.sortItems(user?.goals)?.filter(el => el.repeat === repeat);

  return (
    <Box>
      <SubTitle>{repeat === 'Daily' ? `Today's todo!` : `This Week's todo!`}</SubTitle>
      <ListWrapper>
        {GoalUtils.filterGoalsOfDate(goals, dateInfo.date)?.map(el => (
          <TodoItem goal={el} key={el.id} />
        ))}
      </ListWrapper>
    </Box>
  );
};

export default TodoList;

const Box = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: 40%;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 0.8em;
  padding: 0.3rem;
  /* background-color: #ffebee; */
  /* font-style: italic; */
`;
