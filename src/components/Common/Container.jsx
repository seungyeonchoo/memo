import styled from 'styled-components';

const Container = ({ children, z_index }) => {
  return <StyledContainer z_index={z_index}>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  /* position: absolute;
  z-index: ${props => props.z_index || 0}; */
  border-radius: 10px;
  min-height: 70vh;
  min-width: 60vh;
  padding: 2em;
`;
