import { useQuery } from 'react-query';
import Http from '../services/Http';

const useFetch = (key, url) => {
  const fetchItem = new Http(url);
  const { data, isError } = useQuery(key, () => fetchItem.get());
  return { data, isError };
};

export default useFetch;
