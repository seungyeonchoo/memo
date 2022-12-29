import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filterParamChange, sortParamChange } from '../store/slices/paramSlice';
import handleFilterCondition from '../utils/handleFilterCondition';
import { user_id } from '../utils/Storage';

const useParam = () => {
  const dispatch = useDispatch();
  const { sortParams, filterParams } = useSelector(state => state.param);
  const orderCondition = sortParams._order === 'asc' ? 'desc' : 'asc';
  const { id } = useParams();
  const checkUserId = id === user_id;
  // handle sort param
  const handleSortParam = e => {
    const { name } = e.target;
    const newParam = { _sort: name, _order: orderCondition };
    dispatch(sortParamChange(newParam));
  };

  // handle filter param
  const handleFilterParam = e => {
    const { name, checked } = e.target;
    const newParam = { ...filterParams, [name]: checked };
    dispatch(filterParamChange(newParam));
  };

  return { checkUserId, sortParams, handleSortParam, handleFilterParam };
};

export default useParam;
