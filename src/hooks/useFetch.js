import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import Http from '../services/Http';
import { user_id } from '../utils/Storage';

// goal 데이터를 fetch할때 그룹 목표와 개인 목표의 구분이 필요할 듯
const useFetch = (item, id, type) => {
  const { toggle, param } = useSelector(state => state);
  const { sortParams, filterParams } = param;
  //   const goal_type = type === 'personal' ? { userId: user_id } : { groupId: id };
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
  const fetch_url = id ? `${item}/${id}` : item;

  const fetchItem = new Http(fetch_url);
  const { data, refetch } = useQuery([item], () => fetchItem.get(curr_item.params));
  return { data, refetch };
};

export default useFetch;
