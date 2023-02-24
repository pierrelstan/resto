import Image from 'next/image';
import styled from 'styled-components';

export const Btn = styled.button`
  background-color: ${(props) => props.theme.colors.peach};
  border: none;
  color: ${(props) => props.theme.colors.black};
  padding: 12px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: 'Poppins', sans-serif;
  margin-top: 20px;
  cursor: pointer;

  @media (max-width: 500px) {
    padding: 12px 19px;
    gap: 7px;
  }
`;

export const BtInput = styled.input.attrs({
  type: 'submit',
  value: 'Submit',
})``;
export const ButtonImage = styled(Image)`
  color: ${(props) => props.theme.colors.black};
`;
