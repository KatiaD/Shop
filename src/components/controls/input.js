import styled from 'styled-components';

const Input = styled.input.attrs({
  'data-name': props => props.name,
  name: props => props.name,
  onChange: props => props.onChange,
  onBlur: props => props.onBlur,
  placeholder: props => props.placeholder,
  type: props => props.type,
  value: props => props.value,
  onFocus: props => props.onFocus,
  required: props => props.required,
})`
  color: ${({ theme: { colorDefault } }) => colorDefault};
  font-size: ${({ theme: { fontSize } }) => fontSize};
  margin-top: 25px;
  height: 30px;
  width: 360px;
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme: { colorDefault } }) => colorDefault};
  font-size: 18px;
  transition: line-height 0.5s ease;
  @media (max-width: 414px) {
    width: 310px;
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
    outline: none;
  }
  :focus:-ms-input-placeholder {
    color: transparent;
    outline: none;
  }
  :focus {
    outline: none;
  }
`;

export default Input;
