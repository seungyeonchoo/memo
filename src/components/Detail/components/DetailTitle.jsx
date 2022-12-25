import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import useToggle from '../../../hooks/useToggle';

const DetailTitle = ({ goal }) => {
  return (
    <>
      <TitleText>목표 [{goal?.goal_name}]의 진행현황</TitleText>
      <Description>{goal?.description}</Description>
    </>
  );
};

export default DetailTitle;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1em;
`;

const Description = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;
