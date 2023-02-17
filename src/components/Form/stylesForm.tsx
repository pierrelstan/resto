import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

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
    border-color: ${(props) => props.theme.colors.yellow};
    padding: 0.75rem 2.25rem;
    background: ${(props) => props.theme.colors.yellow};
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
  padding: 14px 8px;
  background-color: ${(props) => props.theme.colors.blackLight};
  margin-bottom: 20px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.grey};
  border-width: 1px;
  border-radius: 2px;
  width: 100%;
  color: ${(props) => props.theme.colors.white} !important;
  @media (max-width: 420px) {
    padding: 18px 10px;
    margin: 2px 0 0;
  }
`;

export const Label = styled.div`
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
`;
