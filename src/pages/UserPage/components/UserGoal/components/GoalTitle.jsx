import styled from 'styled-components';

const GoalTitle = ({ data }) => {
  return <TitleText>{data?.name}님의 목표</TitleText>;
};

export default GoalTitle;

const TitleText = styled.h2``;
