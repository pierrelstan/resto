import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;

  gap: 13px;
  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled(Image)`
  width: 600px;
  height: auto;
  @media (max-width: 920px) {
    width: 100%;
    height: auto;
  }
`;
