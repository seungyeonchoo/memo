import styled from 'styled-components';

const ImminentTitle = () => {
  return <TitleText>기한이 임박한 목표들..</TitleText>;
};

export default ImminentTitle;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5em 0 0 0;
  text-align: left;
`;
