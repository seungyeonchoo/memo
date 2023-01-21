import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoTitle = ({ toggle, handleToggle, onClick }) => {
  const { dateInfo } = useSelector(state => state.input);
  return (
    <Text width={window.visualViewport.width > 800}>
      <h1 onClick={onClick}>{dateInfo.date}</h1>
      <button onClick={handleToggle}>{toggle ? '투두' : '다이어리'}</button>
    </Text>
  );
};
export default TodoTitle;

const Text = styled.div`
  width: 100%;
  padding: 1rem 0 1rem 0;
  margin-top: 1.8rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: ${props => (props.width ? '1px solid #666' : 'none')};
`;
