import { useParams } from 'react-router-dom';
import { user_id } from '../utils/Storage';

const useParam = () => {
  const { id } = useParams();
  const checkUserId = id === user_id;

  return { checkUserId };
};

export default useParam;
