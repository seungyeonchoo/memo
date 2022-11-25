import { useQuery } from 'react-query';
import Http from '../services/Http';

const useFetch = (key, id, url) => {
  const fetchItem = new Http(url);
  const { data, isError } = useQuery([key, id], () => fetchItem.get());
  return { data, isError };
};

export default useFetch;
