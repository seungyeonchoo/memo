import useFetch from '../../../hooks/useFetch';

const TodoComments = ({ id }) => {
  const { data } = useFetch('todos', id);
  console.log(data);
  return <div>s</div>;
};

export default TodoComments;
