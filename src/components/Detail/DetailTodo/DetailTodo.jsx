import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { user_id } from '../../../utils/Storage';
import TodoButton from './components/TodoButton';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const DetailTodo = ({ goal }) => {
  const { id } = useParams();
  if (goal === undefined) return <div>loading...</div>;
  return (
    <TodoBox>
      {id === user_id && <TodoInput id={goal?.id} />}
      <TodoList goal={goal} />
      <TodoButton goal={goal} />
    </TodoBox>
  );
};

export default DetailTodo;

const TodoBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
