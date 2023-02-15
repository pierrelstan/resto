import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  @media (max-width: 430px) {
    background: none;
  }
`;
