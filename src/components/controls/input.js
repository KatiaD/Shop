import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'input',
  'data-name': props => props.name,
})`
  color: ${({ theme: { colorDefault } }) => colorDefault};
  font-size: ${({ theme: { fontSize } }) => fontSize + 'px'};
  margin-top: 25px;
  height: 30px;
  width: 360px;
  background: none;
  border: none;
  border-bottom: 1px solid  ${({ theme: { colorDefault } }) => colorDefault};
  font-size: 18px;
  transition: line-height 0.5s ease;
  @media (max-width: 414px) {
    width: 310px;
  }; 
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
