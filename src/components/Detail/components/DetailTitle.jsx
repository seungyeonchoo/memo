import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import useToggle from '../../../hooks/useToggle';

const DetailTitle = ({ goal }) => {
  return (
    <>
      <TitleText>목표 [{goal?.goal_name}]의 진행현황</TitleText>
      <p>{goal?.description}</p>
    </>
  );
};

export default DetailTitle;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5em 0 0 0;
  text-align: left;
`;
