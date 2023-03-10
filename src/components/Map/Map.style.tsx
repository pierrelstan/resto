import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 200px;
  background: ${(props) => props.theme.colors.black};
`;
export const WrapperAddress = styled.div`
  padding: 16px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Img = styled(Image)`
  width: 100%;
  object-fit: cover;
  height: 550px;
  display: block;
  @media and screen (min-width: 860px) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
