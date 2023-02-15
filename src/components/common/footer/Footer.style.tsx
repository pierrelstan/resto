import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  height: 300px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
`;
export const Title = styled.h5`
  font-size: 18px;
  margin: 9px;
  font-family: 'Poppins', sans-serif;
`;

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Rights = styled.p`
  font-family: 'Poppins', sans-serif;
`;
export const Link = styled.a``;
