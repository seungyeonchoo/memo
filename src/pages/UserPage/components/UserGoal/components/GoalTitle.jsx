import styled from 'styled-components';

const GoalTitle = ({ user }) => {
  return <TitleText>{user?.name}님의 목표</TitleText>;
};

export default GoalTitle;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5em 0 0 0;
  text-align: left;
`;
