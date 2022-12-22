import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import Http from '../services/Http';
import { UserStorage } from '../utils/Storage';

const useFetch = item => {
  const { toggle, param } = useSelector(state => state);
  const { sortParams, filterParams } = param;
  const user_id = new UserStorage().getId();
  const Items = {
    users: {
      params: { _embed: 'goals' },
    },
    goals: {
      params: { ...sortParams, ...filterParams, userId: user_id, _embed: 'todos' },
    },
    todos: {
      params: { goalId: toggle.detailToggle.goal },
    },
    memos: {
      params: { goalId: toggle.detailToggle.goal },
    },
  };

  const curr_item = Items[item];

  const fetchItem = new Http(item === 'users' ? `${item}/${user_id}` : item);
  const { data, refetch } = useQuery([item], () => fetchItem.get(curr_item.params));

  return { data, refetch };
};

export default useFetch;
