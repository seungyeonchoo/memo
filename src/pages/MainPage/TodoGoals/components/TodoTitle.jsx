import { useSelector } from 'react-redux';

const TodoTitle = () => {
  const { dateInfo } = useSelector(state => state.input);
  return <>title</>;
};
export default TodoTitle;
