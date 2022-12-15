import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { filterParamChange, sortParamChange } from '../store/slices/paramSlice';
import handleFilterCondition from '../utils/handleFilterCondition';
import useGoal from './useGoal';

const useParam = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { refetchGoals } = useGoal();
  const { sortParams, filterParams } = useSelector(state => state.param);
  const orderCondition = sortParams._order === 'asc' ? 'desc' : 'asc';

  // handle sort param
  const handleSortParam = e => {
    const { name } = e.target;
    const newParam = { _sort: name, _order: orderCondition };
    dispatch(sortParamChange(newParam));
    refetchGoals();
  };

  // handle filter param
  const handleFilterParam = e => {
    const { name } = e.target;
    const value =
      name === 'is_complete'
        ? handleFilterCondition(filterParams.is_complete)
        : handleFilterCondition(filterParams.is_public);
    const newParam = { ...filterParams, [name]: value };
    dispatch(filterParamChange(newParam));
    refetchGoals();
  };

  return { sortParams, handleSortParam, handleFilterParam };
};

export default useParam;
