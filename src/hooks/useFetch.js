import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import Http from '../services/Http';
import { user_id } from '../utils/Storage';

const useFetch = (item, id) => {
  const { toggle, param } = useSelector(state => state);
  const { sortParams, filterParams } = param;
  const Items = {
    users: {
      params: { _embed: 'goals' },
    },
    goals: {
      params: { ...sortParams, ...filterParams, userId: user_id },
    },
    todos: {
      params: { goalId: toggle.detailToggle.goal },
    },
    memos: {
      params: { goalId: toggle.detailToggle.goal },
    },
  };

  const curr_item = Items[item];
  const fetch_url = id ? `${item}/${id}` : item;

  const fetchItem = new Http(fetch_url);
  const { data, refetch } = useQuery([item], () => fetchItem.get(curr_item.params));
  return { data, refetch };
};

export default useFetch;
