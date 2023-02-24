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
  input[type='time'],
  input[type='number'] {
    background-color: ${(props) => props.theme.colors.grey};
    padding: 15px;
    font-family: 'Roboto Mono', monospace;
    color: ${(props) => props.theme.colors.black} !important;
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 5px;
    appearance: auto;
  }
  input[type='number']::-webkit-inner-spin-button {
    opacity: 1;
    height: 20px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
export const TimeInput = styled.input.attrs({
  type: 'time',
})`
  padding: 14px 8px;
  border-radius: 2px;
`;

export const TelInput = styled.input.attrs((props) => ({
  type: 'tel',
  pattern: props.pattern,
}))``;
export const DateInput = styled.input.attrs({
  type: 'date',
})`
  padding: 14px 8px;
  border-radius: 2px;
`;

export const Input = styled.input`
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

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`;
