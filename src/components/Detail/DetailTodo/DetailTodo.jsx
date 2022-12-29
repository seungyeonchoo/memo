import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { user_id } from '../../../utils/Storage';
import TodoButton from './components/TodoButton';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const DetailTodo = ({ goal }) => {
  const { id } = useParams();

  return (
    <TodoBox>
      {id === user_id && <TodoInput />}
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
