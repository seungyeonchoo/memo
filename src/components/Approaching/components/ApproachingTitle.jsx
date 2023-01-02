import styled from 'styled-components';

const ApproachingTitle = () => {
  return <TitleText>Goals near deadline..</TitleText>;
};

export default ApproachingTitle;

const TitleText = styled.h1`
  font-size: 0.8rem;
  font-weight: lighter;
  text-align: center;
  background-color: #212121;
  color: #ffffff;
  padding: 0.5em 0;
  height: 1.5rem;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 350px;
`;
