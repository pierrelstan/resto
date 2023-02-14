import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  input[type='text'],
  input[type='email'] {
    padding: 0.75rem 3.75rem;
    background-color: ${(props) => props.theme.colors.blackLight};
    margin: 10px;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.grey};
    border-width: 1px;
    border-radius: 5px;
    @media (max-width: 420px) {
      width: 100%;
      padding: 0.75rem 0.75rem;
      margin: 12px 0 0;
    }
  }

  input,
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
    font: 1.25rem / 1.5 sans-serif;
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

const FormField = ({ children }: any) => {
  return <Form>{children}</Form>;
};
export default FormField;
