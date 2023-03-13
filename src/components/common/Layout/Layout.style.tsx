import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.white};
`;
export const InnerLayout = styled.div`
  padding: 0 2.45rem;
  margin-bottom: 26rem;

  @media (min-width: 820px) {
    padding: 0 6.45rem;
    margin-bottom: 3rem;
    width: 100%;
  }
  // @media (max-width: 280px) {
  //   padding: 0px 0.45rem;
  //   margin-bottom: 1rem;
  // }
`;
