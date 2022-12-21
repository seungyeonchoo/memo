import styled from 'styled-components';
import useFetch from '../../../../../hooks/useFetch';
import useToggle from '../../../../../hooks/useToggle';

const DetailTitle = () => {
  const { data: goals } = useFetch('goals');
  const { detailToggle } = useToggle();

  const currGoal = goals.filter(el => el.id === detailToggle.goal)[0];

  return <TitleText>목표 [{currGoal?.goal_name}]의 진행현황</TitleText>;
};

export default DetailTitle;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5em 0 0 0;
  text-align: left;
`;
