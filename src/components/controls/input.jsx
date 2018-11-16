import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'input',
  'data-name': props => props.name
})`
  color: ${ ({theme: {colorDefault}}) => colorDefault };
  font-size: ${ ({theme: {fontSize}}) => fontSize + 'px' };
`;

export default Input;
