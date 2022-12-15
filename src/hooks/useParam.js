import { useDispatch, useSelector } from 'react-redux';
import { sortParamChange } from '../store/slices/paramSlice';

const useParam = () => {
  const dispatch = useDispatch();
  const { sortParams } = useSelector(state => state.param);
  const orderCondition = sortParams._order === 'asc' ? 'desc' : 'asc';

  // handle sort param
  const handleSortParam = e => {
    const { name } = e.target;
    const newParam = { _sort: name, _order: orderCondition };
    dispatch(sortParamChange(newParam));
    console.log(newParam);
  };

  return { sortParams, handleSortParam };
};

export default useParam;
