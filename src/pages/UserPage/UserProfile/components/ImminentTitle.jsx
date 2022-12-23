import styled from 'styled-components';

const ImminentTitle = () => {
  return <TitleText>기한이 임박한 목표들..</TitleText>;
};

export default ImminentTitle;

const TitleText = styled.h1`
  font-size: 0.8rem;
  font-weight: lighter;
  text-align: left;
  text-align: center;
  background-color: #212121;
  color: #ffffff;
  padding: 0.5em 0;
  width: 350px;
`;
