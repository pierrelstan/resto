import Image from 'next/image';
import styled from 'styled-components';

export const WrapperLogin = styled.div`
  margin-top: 120px;
  margin-bottom: 100px;
`;

export const Section = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  align-content: center;
  height: 100vh;
`;

export const WrapperButton = styled.div`
  margin-top: 140px;
  display: flex;
  justify-content: center;
`;

export const WrapperButtonBook = styled.div``;

export const FormBook = styled.form`
  margin: auto;
  @media (max-width: 800px) {
    margin: 0;
    width: auto;
  }

  textarea {
    color: ${(props) => props.theme.colors.white};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.white};
  }
  .button {
    font: 1.25rem sans-serif;
    border-radius: 0.25rem;
    cursor: pointer;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.peach};
    padding: 0.75rem 2.25rem;
    background: ${(props) => props.theme.colors.peach};
    color: ${(props) => props.theme.colors.black};
  }

  textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background-color: ${(props) => props.theme.colors.blackLight};
    border-style: solid;
    border-color: ${(props) => props.theme.colors.grey};
    border-width: 1px;
    border-radius: 5px;
  }

  textarea {
    min-height: 10rem;
  }

  input[type='date'],
  input[type='number'] {
    color: ${(props) => props.theme.colors.black} !important;
    background: ${(props) => props.theme.colors.white} !important;
  }

  select,
  options {
    padding: 14px 15px;
    font-family: 'Roboto Mono', monospace;
    font-size: 18px;
    border-color: ${(props) => props.theme.colors.grey};
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    outline: none;
    border-radius: 5px;
  }
  input[type='number']::-webkit-inner-spin-button {
    opacity: 1;
    height: 20px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
export const FormContact = styled.form`
  .button {
    font: 1.25rem sans-serif;
    border-radius: 0.25rem;
    cursor: pointer;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.peach};
    padding: 0.75rem 2.25rem;
    background: ${(props) => props.theme.colors.peach};
    color: ${(props) => props.theme.colors.black};
  }
  textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background-color: ${(props) => props.theme.colors.blackLight};
    border-style: solid;
    border-color: ${(props) => props.theme.colors.grey};
    border-width: 1px;
    border-radius: 5px;
  }
  textarea {
    min-height: 10rem;
  }
`;
export const Container = styled.div`
  @media (max-width: 820px) {
    padding-top: 200px;
  }
`;
export const Form = styled.form`
  margin: auto;
  width: 50%;

  @media (max-width: 800px) {
    margin: 0;
    width: auto;
  }

  textarea {
    color: ${(props) => props.theme.colors.white};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.white};
  }
  .button {
    font: 1.25rem sans-serif;
    border-radius: 0.25rem;
    cursor: pointer;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.peach};
    padding: 0.75rem 2.25rem;
    background: ${(props) => props.theme.colors.peach};
    color: ${(props) => props.theme.colors.black};
  }

  textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background-color: ${(props) => props.theme.colors.blackLight};
    border-style: solid;
    border-color: ${(props) => props.theme.colors.grey};
    border-width: 1px;
    border-radius: 5px;
  }

  textarea {
    min-height: 10rem;
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 100%;
  padding: 14px 8px;
  background: transparent;
  margin-bottom: 20px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.grey};
  border-width: 1px;
  border-radius: 2px;
  color: ${(props) => props.theme.colors.white} !important;
  @media (max-width: 420px) {
    padding: 18px 10px;
    margin: 2px 0 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`;
export const BookFormContainer = styled.form`
  display: flex;
  align-items: center;
`;
export const WrapperBookForm = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WrapperLabel = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Label = styled.div`
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
`;
export const HeaderImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
