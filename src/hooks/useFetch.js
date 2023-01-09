import { useQuery } from 'react-query';
import Http from '../services/Http';

// goal 데이터를 fetch할때 그룹 목표와 개인 목표의 구분이 필요할 듯 => param 전달을 통해서

const useFetch = (url, params, queryKey, ...rest) => {
  const fetchData = new Http(url);
  const { isLoading, isError, data, refetch } = useQuery(queryKey, () => {
    [...rest].forEach(el => el());
    return fetchData.get(params);
  });

  return { isLoading, isError, data, refetch };
};

export default useFetch;
