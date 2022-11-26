import { useDispatch, useSelector } from 'react-redux';
import { inputChange } from '../store/slices/inputSlice';

const useInput = () => {
  const dispatch = useDispatch();
  const { inputState } = useSelector(state => state.input);

  const handleInputChange = e => {
    const { name, value } = e.target;
    dispatch(inputChange({ ...inputState, [name]: value }));
  };

  const handleInputInit = () => {
    dispatch(inputChange({}));
  };

  return { inputState, handleInputChange, handleInputInit };
};

export default useInput;
