import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useDebounce = (input, action) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const debounceHandler = setTimeout(() => dispatch(action(input)), 500);
    return () => clearTimeout(debounceHandler);
  }, [input]);
};

export default useDebounce;

// useEffect(() => {
//     const handler = setTimeout(() => setDebounceKeyword(keyword), delay);
//     return () => clearTimeout(handler);
//   }, [keyword, delay]);
