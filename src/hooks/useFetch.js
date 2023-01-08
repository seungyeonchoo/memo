import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Http from '../services/Http';

// goal 데이터를 fetch할때 그룹 목표와 개인 목표의 구분이 필요할 듯
const useFetch = (url, params, queryKey, ...rest) => {
  //   const goal_type = type === 'personal' ? { userId: user_id } : { groupId: id };

  //   const curr_item = Items[item];
  //   const fetch_url = id ? `${item}/${id}` : item;
  //   const query_key = id ? [item, { id: id }] : [item];

  //   const fetchItem = new Http(fetch_url);
  //   const { isLoading, isError, data, refetch } = useQuery(query_key, () =>
  //     fetchItem.get(curr_item.params)
  //   );

  const fetchData = new Http(url);
  const { isLoading, isError, data, refetch } = useQuery(queryKey, () => {
    [...rest].forEach(el => el());
    return fetchData.get(params);
  });

  return { isLoading, isError, data, refetch };
};

export default useFetch;

// 삭제 말고 수정
// url, params 받아서 api 호출할 것
