import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.black};
`;
export const WrapperAddress = styled.div`
  padding: 40px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  margin-top: 100px;
  gap: 13px;
  @media (max-width: 820px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Img = styled(Image)`
  width: 100%;
  height: auto;
`;
