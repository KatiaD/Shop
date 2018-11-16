import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'button',
  'data-name': props => props.name
})`
  color: ${ ({theme: {colorAccent}}) => colorAccent };
  background-color: ${ ({theme: {colorDefault}}) => colorDefault };
  font-size: ${ ({theme: {fontSize}}) => fontSize + 'px' };
`;

export default Button;